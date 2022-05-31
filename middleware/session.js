const session = require('express-session');
const mongoDbSession = require('connect-mongodb-session')(session);
require('dotenv').config();

// saving session data to database................................
const storage = new mongoDbSession({
  uri: process.env.MONGO_URI,
  collection: 'mysession',
});
// generatin session and cookie.............................
module.exports = session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  store: storage,
  name: 'SID',
  cookie: {
    sameSite: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
});
