import database from "../config/database.js"
import { DataTypes } from "sequelize"

const Item = database.define("item", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    quantity: {
        type: DataTypes.STRING,
        allowNull: false
    },

    unitMeasure: {
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

export default Item
