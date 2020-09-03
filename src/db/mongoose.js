const mongoose = require('mongoose');
const connectionURL = process.env.connectionURL;
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(connectionURL, options);
