import Item from "../models/items.js"

export const create = async (description, quantity, unitMeasure, value, userId) => {
    try {
        const ingredient = await Item.findOne({where: {description, userId}})
    
        if (ingredient) {
            throw new Error("Item já cadastrado!")
        }

        await Item.create({description, quantity, unitMeasure, value, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Item.findAll({order: [["description", "ASC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, description, quantity, unitMeasure, value, userId) => {
    try {
        const ingredient = await Item.findOne({where: {description, userId}})

        if (ingredient && id != ingredient.id) {
            throw new Error("Item já cadastrado!")
        }

        await Item.update({description, quantity, unitMeasure, value}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Item.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
