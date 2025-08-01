import database from "../config/database.js"
import { DataTypes } from "sequelize"

const Ingredient = database.define("ingredient", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    value: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },

    quantity: {
        type: DataTypes.STRING,
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

export default Ingredient
