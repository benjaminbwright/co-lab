const sequelize = require('../../config/connection');
const Project = require('../../models/Project');

describe('Remove This Test', () => {
  describe('This test', () => {
    it('should pass', () => {
      expect(5).toEqual(5);
    });
  });
});

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Sequelize Project Model Tests', () => {
  describe('Creates Project Model Instance', () => {
    it('should create a new Project Model Instance with the correct properties and values', async () => {
      const projectData = await Project.create({
        title: 'testproject',
        userStory: 'as a user, I want to be able to do this',
        repoLink: 'https://github.com/benjaminbwright/co-lab',
        description: 'testprojectdescription',
        stack: 'javascript, node, express, sequelize, handlebars, jest',
        interest: 45,
      });
      const project = projectData.get({ plain: true });
      expect(project).toEqual({
        id: 1,
        title: 'testproject',
        userStory: 'as a user, I want to be able to do this',
        repoLink: 'https://github.com/benjaminbwright/co-lab',
        description: 'testprojectdescription',
        stack: 'javascript, node, express, sequelize, handlebars, jest',
        interest: 45,
      });
      expect(project).toBeDefined();
      expect(project.title).toBe('testproject');
      expect(project.userStory).toBe('as a user, I want to be able to do this');
      expect(project.repoLink).toBe(
        'https://github.com/benjaminbwright/co-lab'
      );
      expect(project.description).toBe('testprojectdescription');
      expect(project.stack).toBe(
        'javascript, node, express, sequelize, handlebars, jest'
      );
      expect(project.interest).toBe(45);
    });
  });
});
