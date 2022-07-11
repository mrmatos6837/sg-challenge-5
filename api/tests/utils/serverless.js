const { spawn } = require("child_process");

let instance = null;

module.exports = {
  start: async function () {
    return new Promise((resolve, reject) => {
      console.log("trying");
      const child = (instance = spawn("npm", ["run", "local"]));
      child.stdout.on("data", function (data) {
        if (data.toString().indexOf("listening") > -1) {
          resolve(); // @todo return anything here?
        } else if (data.toString().indexOf("EADDRINUSE") > -1) {
          reject(new Error("Port is in use"));
        }
      });
    });
  },
  stop: () => instance.kill(),
};
