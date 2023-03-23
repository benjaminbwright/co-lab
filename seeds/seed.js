// sequelize connection
const sequelize = require('../config/connection');
// eslint-disable-next-line
const { User } = require('../models');

// data
const userData = [
  {
    username: 'bilbobaggins',
    email: 'bilbo@bagend.com',
    password: 'GollumCantCatchMe#1!!!',
  },
];

// seed function
const seedDB = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, { individualHooks: true });
  // seed some stuff.
  process.exit(0);
};

seedDB();
