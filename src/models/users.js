import database from "../config/database.js"
import { DataTypes } from "sequelize"

const User = database.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        timestamps: false
    }
)

export default User
