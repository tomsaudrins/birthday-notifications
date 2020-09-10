const express = require("express");
const router = express.Router();
const Birthday = require("../models/birthday");

router.get("/birthdays", async (req, res) => {
  console.log(parseInt(req.query.day));
  const dateNow = new Date();
  const options =
    req.query.listAll == "true"
      ? {}
      : {
          month: parseInt(req.query.month) || dateNow.getMonth() + 1,
          day: parseInt(req.query.day) || dateNow.getDate(),
        };
  console.log(options)
  const birthdays = await Birthday.find(options);
  console.log(birthdays);
  if (!birthdays.length)
    return res.status(404).json({
      error:
        "Today nobody is celebrating their birthday! Accidents happen. Or in this case, they did not, at least not 9 months ago.",
    });
  res.status(200).json(birthdays);
});

router.post("/birthdays", async (req, res) => {
  const birthday = new Birthday(req.body);
  try {
    await birthday.save();
    res.status(201).json({ message: "Success" });
  } catch (error) {
    res.status(500).json({
      error:
        "You broke my website, I will send you the invice for the damages soon",
    });
  }
});
module.exports = router;
