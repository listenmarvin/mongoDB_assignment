const express = require("express");
const router = express.Router();
const UserData = require("../models/userModel");
// const monoose = require("mongoose");
const index = require('../app')
const app = express();
app.use(express.json());


//This Router fetch all the records from the database
router.get("/user", async (req, res) => {
  try {
    const users = await UserData.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//This Router fetches the data of specific id
router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserData.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//This Router updates the data we should pass the id
router.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userUpdate = await UserData.findByIdAndUpdate(id, req.body);
    if (!userUpdate) {
      return res
        .status(404)
        .json({ message: `cann't find any product with id ${id}` });
    }
    res.status(200).json({ userUpdate });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//This Router Inserts new data into database
router.post("/user", async (req, res) => {
  try {
    const userCreate = await UserData.create(req.body);
    res.status(200).json(userCreate);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
