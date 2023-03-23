const sequelize = require('../../config/connection');
const { User } = require('../../models');


beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.close();
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
        id: 2,
        username: 'testuser2',
        email: 'testuser2@teststuff.net',
        password: user.password
      });
      expect(user.id).toBe(2);
      expect(user.username).toBe('testuser2');
      expect(user.email).toBe('testuser2@teststuff.net');
      expect(user.password).not.toBe('testpassword');

    });
  });
});