const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userStory: {
            type: DataTypes.STRING,
            allowNull: false,
        },  
        repoLink: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isUrl: true,
            },
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        stack: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        interest: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = Project;