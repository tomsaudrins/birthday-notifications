const https = require('https');

const Birthday = require('../models/birthday');
const secondsUntilMorning = require('./secondsUntilMorning');

// Information obtained when creating the bot
const token = process.env.TELEGRAM_TOKEN;
const chatID = process.env.TELEGRAM_CHAT_ID;

const sendBirthdayNotification = async () => {
 /*
 * Sends a telegram message with people who's birthday / event 
 * it is today. Afterwards schedules to run the same function
 * at 8 am next day.
 */
  const dateNow = new Date();
  const birthdays = await Birthday.find({
    month: dateNow.getMonth() + 1,
    day: dateNow.getDate(),
  });

  birthdays.forEach(({firstName, lastName, event}) => {
    const message = `Don't forget it is ${firstName} ${lastName}'s ${event} ! `;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatID}&text=${message}`;
    https.get(url);
  });
  setTimeout(sendBirthdayNotification, secondsUntilMorning());
};

module.exports = sendBirthdayNotification;
