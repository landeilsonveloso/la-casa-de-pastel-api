import database from "../config/database.js"
import { DataTypes } from "sequelize"

const Outflow = database.define("outflow", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },

    method: {
        type: DataTypes.STRING,
        allowNull: false
    },

    value: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model: "users"}
    }
},

    {
        timestamps: false
    }
)

export default Outflow
