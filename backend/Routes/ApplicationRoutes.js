const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

router.get("/", async (req, res) => {
  try {
    const data = await Application.find({});
    return res.json({ data });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, university, college, DOB, ans1, ans2 } = req.body;
    const application = new Application({
      name,
      email,
      university,
      college,
      DOB,
      ans1,
      ans2,
    });
    await application.save();

    return res.json({ application });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Application.findByIdAndDelete(req.params.id);
    return res.json({ msg: "Application has been deleted" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
