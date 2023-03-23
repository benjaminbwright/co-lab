const sequelize = require('../config/connection');

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
