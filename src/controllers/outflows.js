import Outflow from "../models/outflows.js"

export const create = async (description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue, userId) => {
    try {
        await Outflow.create({description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Outflow.findAll({order: [["date", "DESC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue) => {
    try {
        await Outflow.update({description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Outflow.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
