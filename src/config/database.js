import envConfig from "./config.js"
import Sequelize from "sequelize"
import postgres from "pg"

const dbConfig = {
    dialect: "postgres",
    dialectModule: postgres
}

const database = new Sequelize(envConfig.DATABASE_URL, dbConfig)

database.authenticate().then(() => console.log("Conexão realizada com sucesso!")).catch((err) => console.log(err.message))

export default database
