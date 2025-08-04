import Ingredient from "../models/ingredients.js"

export const create = async (description, quantity, unitMeasure, value, userId) => {
    try {
        const ingredient = await Ingredient.findOne({where: {description, userId}})
    
        if (ingredient) {
            throw new Error("Ingrediente já cadastrado!")
        }

        await Ingredient.create({description, quantity, unitMeasure, value, userId})
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

export const update = async (id, description, quantity, unitMeasure, value, userId) => {
    try {
        const ingredient = await Ingredient.findOne({where: {description, userId}})

        if (ingredient && id != ingredient.id) {
            throw new Error("Ingrediente já cadastrado!")
        }

        await Ingredient.update({description, quantity, unitMeasure, value}, {where: {id}})
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
