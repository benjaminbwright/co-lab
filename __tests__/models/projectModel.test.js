describe('Remove This Test', () => {
    describe('This test', () => {
      it('should pass', () => {
        expect(5).toEqual(5);
      });
    });
  });
// const sequelize = require('../config/connection');
// const { Project } = require('../models');

// beforeAll(async () => {
//     await sequelize.sync({ force: true });
//     });

// afterAll(async () => {
//     await sequelize.close();
//     });

// describe('Sequelize Project Model Tests', () => {
//     describe('Creates Project Model Instance', () => {
//         it('should create a new Project Model Instance', async () => {
//             const projectData = await Project.create({
//                 project_name: 'testproject',
//                 project_user_story: 'as a user, I want to be able to do this',
//                 project_description: 'testprojectdescription',
//                 project_stack: 'javascript, node, express, sequelize, handlebars, jest',
//                 project_interest: 45,
//             });
//             const project = projectData.get({ plain: true });
//             expect(project).toBeDefined();
//         });
//         // it should create new project model instance with the correct properties and values
//         it('should create a new Project Model Instance with the correct properties and values', async () => {
//     });
// })
// })