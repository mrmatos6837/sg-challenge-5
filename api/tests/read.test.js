const { handler } = require("../src/handlers/read");
const getRequest = require("./payloads/getRequest");

test("GET resquest on unexistent item", async () => {
  const response = await handler(getRequest);
  const data = JSON.parse(response.body);
  console.log(data);
  expect(response.statusCode).toBe(200);
  expect(data.sk).toBe("abcd");
});
