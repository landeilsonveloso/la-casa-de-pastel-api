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

    firstMethod: {
        type: DataTypes.STRING,
        allowNull: false
    },

    firstValue: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    secondMethod: {
        type: DataTypes.STRING
    },

    secondValue: {
        type: DataTypes.DECIMAL
    },

    thirdMethod: {
        type: DataTypes.STRING
    },

    thirdValue: {
        type: DataTypes.DECIMAL
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
