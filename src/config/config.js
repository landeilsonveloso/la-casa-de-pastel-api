import { config } from "dotenv"

config({quiet: true})

const envConfig = {
    APP_PASSWORD: process.env.APP_PASSWORD,
    DATABASE_URL: process.env.DATABASE_URL,
    SUPPORT_EMAIL: process.env.SUPPORT_EMAIL,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT
}

export default envConfig
