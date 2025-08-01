import cors from "cors"
import express, { json, Router } from "express"
import inflowRouter from "./routes/inflows.js"
import ingredientRouter from "./routes/ingredients.js"
import outflowRouter from "./routes/outflows.js"
import userRouter from "./routes/users.js"

const router = Router()
const app = express()

app.use(cors())
app.use(json())

router.use("/users", userRouter)
router.use("/ingredients", ingredientRouter)
router.use("/inflows", inflowRouter)
router.use("/outflows", outflowRouter)

app.use(router)

export default app
