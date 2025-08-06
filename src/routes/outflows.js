import { create, destroy, findAll, update } from "../controllers/outflows.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const outflowRouter = Router()

outflowRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue} = req.body

        if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!date) {
            return res.status(400).send("Campo data obrigatório!")
        }

        else if (!firstMethod) {
            return res.status(400).send("Campo 1º método obrigatório!")
        }

        else if (!firstValue) {
            return res.status(400).send("Campo 1º valor obrigatório!")
        }
        
        await create(description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue, userId)
        
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
        const {description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue} = req.body

        if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!date) {
            return res.status(400).send("Campo data obrigatório!")
        }

        else if (!firstMethod) {
            return res.status(400).send("Campo 1º método obrigatório!")
        }

        else if (!firstValue) {
            return res.status(400).send("Campo 1º valor obrigatório!")
        }
        
        await update(id, description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue)
        
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
