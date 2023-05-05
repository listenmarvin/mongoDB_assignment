const app = require("../../app");
const request = require('supertest');

//This log is used to check wheather data get inserted into the database or not
describe("user",() => {
  it("Should create a new user", async() => {
    const user = {
      Name: " Rahul",
      age: "15",
      email: "Rahul@example.com"
    };

    const res = await request(app).post("/user").send(user);
    expect(res.statusCode).toBe(200);
  }, 15000);
    it("It returns status code 500 if name , age and email is not passed", async () => {
    const value = { Name: "Raja", age:26,email: "raja@gmail.com" };
    const res = await request(app).post("/user").send();
    expect(res.statusCode).toBe(500);
   
  });
});

//This log is used to check wheather data is fetched correctly or not
describe("user",()=>{
  it("should get a list of users", async () => {
    const res = await request(app).get("/user");
     expect(res.statusCode).toEqual(200);
   
  });
})

//This log is used to check wheather data is updated correctly or not
 describe("updateUser", () => {
    it("returns status code 200 if data is updated successfully", async () => {
      const userId = "645336da52438969405f6d4f"; 
      const userData = { Name: "Rakesh" }; 
      const res = await request(app).put(`/user/${userId}`).send(userData);
      expect(res.statusCode).toEqual(200);
    });
  });
  // test case for failed update
describe("updateUser", () => {
    it("returns status code 500 if data is not updated successfully", async () => {
      const userId = "6452280c60e140647844463e1"; 
      const userData = { Name: "Rakesh" }; 
      const res = await request(app).put(`/user/${userId}`).send(userData);
      expect(res.statusCode).toEqual(500);
    });
  });

 

 




