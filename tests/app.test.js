const request = require("supertest");
const app = require("../src/index");
describe("App Test Starting Point", () => {
  test("App should be defined", () => {
    console.log("App is defined");
  });

  //
  test("App should be running", async () => {
    console.log("App is running");
    let response = await request(app).get("/auth/users");
    expect(response.statusCode).toBe(200);
    console.log(response.body);
  });
});
