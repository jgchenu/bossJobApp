const sequelize = require("../db.js");
const Sequelize = require("sequelize");
module.exports = sequelize.define(
    "user", {
        id: {
            type: Sequelize.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        user: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        pwd: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        type: {
            type: Sequelize.STRING(255),
            allowNull: false,
        },
        avatar: {
            type: Sequelize.STRING(255),
        },
        desc: {
            type: Sequelize.STRING(255),
        },

        title: {
            type: Sequelize.STRING(255),
        },
        company: {
            type: Sequelize.STRING(255),
        },
        money: {
            type: Sequelize.STRING(255),
        }
    }, {
        timestamps: false,
        freezeTableName: true
    }
);