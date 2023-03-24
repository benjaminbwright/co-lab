const sequelize = require('../../config/connection');
const { User } = require('../../models');

beforeAll(async () => {
  await sequelize.sync({ force: false });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Sequelize User Model Tests', () => {
  describe('Remove This Test', () => {
    describe('This test', () => {
      it('should pass', () => {
        console.log(User)
        expect(5).toEqual(5);
      });
    });
  });
  
  // describe('Creates User Model Instance', () => {
  //   it('should create a new User Model Instance', async () => {
  //     const userData = await User.create({
  //       username: 'testuser',
  //       email: 'testuser@teststuff.net',
  //       password: 'testpassword',
  //     });
  //     const user = userData.get({ plain: true });
  //     expect(user).toBeDefined();
  //   });

    // it('should create a new User Model Instance with the correct properties and values', async () => {
    //   const userData = await User.create({
    //     username: 'testuser2',
    //     email: 'testuser2@teststuff.net',
    //     password: 'testpassword',
    //   });
    //   const user = userData.get({ plain: true });

    //   expect(user).toEqual({
    //     id: 2,
    //     username: 'testuser2',
    //     email: 'testuser2@teststuff.net',
    //     password: user.password,
    //   });
    //   expect(user.id).toBe(2);
    //   expect(user.username).toBe('testuser2');
    //   expect(user.email).toBe('testuser2@teststuff.net');
    //   expect(user.password).not.toBe('testpassword');
    // });
    // it('should compare the plain text login password to the hashed password using an instance method', async () => {
    //   // create a new user
    //   const userData = {
    //     username: 'testuser3',
    //     email: 'testuser3@teststuff.net',
    //     password: 'testpassword',
    //   };

    //   try  {
    //     const user = await User.create(userData);
    //     console.log(user)
    //   } catch(err) {
    //     console.log(err)
    //   }
      

    //   // compare the plain text password we used to create the user to the password on the new user instance
    //   const validPassword = user.checkPassword(userData.password);

    //   expect(validPassword).toBe(true);
    // });
  // });
});
