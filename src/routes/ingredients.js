import { create, destroy, findAll, update } from "../controllers/ingredients.js"
import { Router } from "express"
import verifyToken from "../middlewares/auth.js"

const ingredientRouter = Router()

ingredientRouter.post("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId
        const {description, quantity, unitMeasure, value} = req.body
        
        if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!quantity) {
            return res.status(400).send("Campo quantidade obrigatório!")
        }

        else if (!unitMeasure) {
            return res.status(400).send("Campo unidade de medida obrigatório!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }

        await create(description, quantity, unitMeasure, value, userId)
        
        res.status(201).send("Ingrediente cadastrado com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

ingredientRouter.get("/", verifyToken, async (req, res) => {
    try {
        const userId = req.userId

        const ingredients = await findAll(userId)

        res.status(200).send(ingredients)
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

ingredientRouter.put("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id
        const userId = req.userId
        const {description, quantity, unitMeasure, value} = req.body
        
        if (!description) {
            return res.status(400).send("Campo descrição obrigatório!")
        }

        else if (description.length < 3 || description.length > 60) {
            return res.status(400).send("Campo descrição deve conter entre 3 e 60 caracteres!")
        }

        else if (!quantity) {
            return res.status(400).send("Campo quantidade obrigatório!")
        }

        else if (!unitMeasure) {
            return res.status(400).send("Campo unidade de medida obrigatório!")
        }

        else if (!value) {
            return res.status(400).send("Campo valor obrigatório!")
        }

        await update(id, description, quantity, unitMeasure, value, userId)

        res.status(200).send("Ingrediente atualizado com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

ingredientRouter.delete("/:id", verifyToken, async (req, res) => {
    try {
        const id = req.params.id

        await destroy(id)

        res.status(200).send("Ingrediente excluido com sucesso!")
    }
    
    catch (err) {
        return res.status(400).send(err.message)
    }
})

export default ingredientRouter
