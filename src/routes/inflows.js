import { create, destroy, findAll, update } from "../controllers/inflows.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const inflowRouter = Router()

inflowRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {description, date, method, value} = req.body

        if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!date) {
            return res.status(400).send("Campo data obrigatório!")
        }

        else if (!method) {
            return res.status(400).send("Campo método obrigatório!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }
        
        await create(description, date, method, value, userId)
        
        res.status(201).send("Entrada cadastrada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

inflowRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const inflows = await findAll(userId)

        res.status(200).send(inflows)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

inflowRouter.put("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id
        const {description, date, method, value} = req.body

        if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!date) {
            return res.status(400).send("Campo data obrigatório!")
        }

        else if (!method) {
            return res.status(400).send("Campo método obrigatório!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }
        
        await update(id, description, date, method, value)
        
        res.status(200).send("Entrada atualizada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

inflowRouter.delete("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id

        await destroy(id)

        res.status(200).send("Entrada excluida com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

export default inflowRouter
