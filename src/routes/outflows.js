import { create, destroy, findAll, update } from "../controllers/outflows.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const outflowRouter = Router()

outflowRouter.post("/", verifyToken, async (req, res) => {
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
        
        res.status(201).send("Saída cadastrada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

outflowRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const outflows = await findAll(userId)

        res.status(200).send(outflows)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

outflowRouter.put("/:id", verifyToken, async (req, res) => {
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
        
        res.status(200).send("Saída atualizada com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

outflowRouter.delete("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id

        await destroy(id)

        res.status(200).send("Saída excluida com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

export default outflowRouter
