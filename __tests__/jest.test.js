const sequelize = require('../config/connection');
const { User } = require('../models');


beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.close();
});

describe('Jest is running', () => {
  describe('Sample Test', () => {
    it('should pass', () => {
      expect(5).toEqual(5);
    });
  });
});

describe('Sequelize User Model Tests', () => {

  describe('Creates User Model Instance', () => {

    it('should create a new User Model Instance', async () => {
      const userData = await User.create({
        username: 'testuser',
        email: 'testuser@teststuff.net',
        password: 'testpassword'
      });
      const user = userData.get({plain: true});
      expect(user).toBeDefined();
    });

    it('should create a new User Model Instance with the correct properties and values', async () => {
      const userData = await User.create({
        username: 'testuser2',
        email: 'testuser2@teststuff.net',
        password: 'testpassword'
      });
      const user = userData.get({plain: true});
      
      expect(user).toEqual({
        id: user.id,
        username: 'testuser2',
        email: 'testuser2@teststuff.net',
        password: user.password
      });
    });
  });
});