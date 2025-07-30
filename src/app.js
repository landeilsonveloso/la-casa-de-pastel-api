import cors from "cors"
import express, { json, Router } from "express"
import userRouter from "./routes/users.js"

const router = Router()
const app = express()

app.use(cors())
app.use(json())

router.use("/users", userRouter)

app.use(router)

export default app
