import request from "supertest";
import app from "../src/index";
describe("App Test Starting Point", () => {
  test("App should be defined", () => {
    console.log("App is defined");
  });

  //
  test("Get all users from users route as a array list", async () => {
    let response = await request(app).get("/auth/users");
    expect(response.statusCode).toBe(200);
    console.log(response.body);
  });
});
