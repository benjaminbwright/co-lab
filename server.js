// Import dependencies
const app = require('./app');
const sequelize = require('./config/connection');
// Define Variables
const PORT = process.env.PORT || 3001;

// When this file is ran, express listens for connections to our designated port address, and returns a node http.Server with this application as its callback
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
  );
});
