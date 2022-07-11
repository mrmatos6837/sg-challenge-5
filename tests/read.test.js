const { handler } = require("../src/api/handlers/read");
const getRequest = require("./payloads/getRequest");

test("test GET request", async () => {
  const response = await handler(getRequest);
  const data = JSON.parse(response.body);
  console.log(data);
  expect(response.statusCode).toBe(200);
  expect(data.sk).toBe("123");
});
