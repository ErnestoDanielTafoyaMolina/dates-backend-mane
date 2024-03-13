import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";
import { User } from "./User";

export const Date = sequelize.define('Date', {
    iddate: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

// Relación con User
Date.belongsTo(User, { foreignKey: 'idUser' });
