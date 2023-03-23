const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },  
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8,30],
            },
        },
    },
    {
        hooks: {
            // bcrypt hashes incoming passwords on new user creation
            beforeCreate: async (newUserData) => {
                 const hashedPassword = await bcrypt.hash(newUserData.password, 10);
                 newUserData.password = hashedPassword; // eslint-disable-line no-param-reassign
                 
                return newUserData
                
            },
            beforeUpdate: async (updatedUserData) => {
                if (updatedUserData.password) {
                const hashedPassword = await bcrypt.hash(updatedUserData.password, 10);  
                updatedUserData.password = hashedPassword; // eslint-disable-line no-param-reassign
                }
                return updatedUserData
            },
        },  
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;