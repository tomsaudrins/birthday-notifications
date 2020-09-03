const express = require('express');
const router = express.Router();
const Birthday = require('../models/birthday');

router.get('/birthdays', async (req, res) => {
  const dateNow = new Date();
  const birthdays = await Birthday.find({
    month: dateNow.getMonth() + 1,
    day: dateNow.getDate(),
  });
  console.log(birthdays);
  if (!birthdays.length)
    return res.status(404).json({
      error:
        'Today nobody is celebrating their birthday! Accidents happen. Or in this case, they did not, at least 9 months ago.',
    });
  res.status(200).json(birthdays);
});

router.post('/birthdays', async (req, res) => {
  const birthday = new Birthday(req.body);
  try {
    await birthday.save();
    res.status(201).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({
      error:
        'You broke my website, I will send you the invice for the damages soon',
    });
  }
});
module.exports = router;
