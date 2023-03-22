// Import dependencies
// Provides functions to send and recieve server requests on the designated port
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

const sequelize = require('./config/connection');
const routes = require('./controllers');
// Provides utilities for working with file and directory paths
// const path = require('path');


// Define Variables
const PORT = process.env.PORT || 3001;

// Defining express as a top-level function to be re-used each time a request is made or the port is being listened to
// Initialize server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Sets the PORT variable to either the value of the PORT environment variable, if it is set, or 3001 if it is not set.
// This is useful when deploying the application to a hosting platform, as the hosting platform may specify the port that the application should listen on through an environment variable.

// Session configuration
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    // Stored in milliseconds
    maxAge: 60 * 60 * 1000, // expires after 1 hour
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Handlebars
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Use Router
app.use(routes);

// GET Route for Homepage, '/' is the default filepath
app.get('/', (req, res) =>
  // The response for sending a get request to the homepage is to receive our index.html file
  // res.sendFile(path.join(__dirname, '/public/index.html'))
  req.session.save(() => {
    req.session.test = "it's working!";
    res.render('home', { test: req.session.test })

  })
);

// When this file is ran, express listens for connections to our designated port address, and returns a node http.Server with this application as its callback
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
});