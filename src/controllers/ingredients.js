import Ingredient from "../models/ingredients.js"

export const create = async (description, value, quantity, userId) => {
    try {
        const ingredient = await Ingredient.findOne({where: {description, userId}})
    
        if (ingredient) {
            throw new Error("Ingrediente já cadastrado!")
        }

        await Ingredient.create({description, value, quantity, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Ingredient.findAll({order: [["description", "ASC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, description, value, quantity, userId) => {
    try {
        const ingredient = await Ingredient.findOne({where: {description, userId}})

        if (ingredient && id != ingredient.id) {
            throw new Error("Ingrediente já cadastrado!")
        }

        await Ingredient.update({description, value, quantity}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Ingredient.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
