import Sequelize  from "sequelize";
import { configs } from "../config";

export const sequelize = new Sequelize(
    configs.DB_NAME,
    configs.DB_DIALECT,
    configs.DB_PASSWORD,{
      host:configs.DB_URL,
      dialect:configs.DB_DIALECT,
    },
);