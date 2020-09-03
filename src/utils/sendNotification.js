const https = require('https');

const Birthday = require('../models/birthday');
const secondsUntilMorning = require('./secondsUntilMorning');

const token = process.env.TELEGRAM_TOKEN;
const chatID = process.env.TELEGRAM_CHAT_ID;

const sendBirthdayNotification = async () => {
  const dateNow = new Date();
  const birthdays = await Birthday.find({
    month: dateNow.getMonth() + 1,
    day: dateNow.getDate(),
  });

  birthdays.forEach((person) => {
    const message = `Don't forget today it is ${person.firstName} ${person.lastName} birthday! `;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}`;
    https.get(url);
  });
  setTimeout(sendBirthdayNotification, secondsUntilMorning());
};

module.exports = sendBirthdayNotification;
