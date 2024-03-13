import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection";
import { User } from "./Users";
import { Date } from "./Dates";

export const Reminder = sequelize.define('Reminder', {
    idreminder: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
// Relaciones con User y Date
Reminder.belongsTo(User, { foreignKey: 'idUser' });
Reminder.belongsTo(Date, { foreignKey: 'idDate' });