const express = require("express");
const monoose = require("mongoose");
const app = express();
const userRoute = require("./routes/router");
// const UserData = require("./models/userModel");
app.use(express.json());
app.use("/", userRoute);

//Database connection 
monoose
  .connect(
    "mongodb+srv://firstDb:database@cluster0.rqbq2ea.mongodb.net/UserInfo?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(3000, () => {
      console.log("Server Started:Port is 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;






// const app = require("./app");
// const monoose = require("mongoose");

// monoose
//   .connect(
//     "mongodb+srv://firstDb:database@cluster0.rqbq2ea.mongodb.net/Book?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log("connected to mongoDB");
//     app.listen(3000, () => {
//       console.log("Server Started:Port is 3000");
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
