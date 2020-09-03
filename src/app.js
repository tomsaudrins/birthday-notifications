require('./db/mongoose');

const express = require('express');
const helmet = require('helmet');

const sendBirthdayNotification = require('./utils/sendNotification');
const birthdayRouter = require('./routes/birthday');

const app = express();
const port = process.env.PORT;

// Always use protection
app.use(helmet());
app.use(express.json());

// List today's birthdays for GET request, adds a new birthday for POST request.
app.use('', birthdayRouter);

app.listen(port, () => console.log(`Listening on localhost:${port}`));

// Sends birthday notification and schedules another one at 8:00:00 am.
sendBirthdayNotification();
