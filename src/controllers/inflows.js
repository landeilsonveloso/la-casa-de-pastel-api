import Inflow from "../models/inflows.js"

export const create = async (description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue, userId) => {
    try {
        await Inflow.create({description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue, userId})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findAll = async (userId) => {
    try {
        return await Inflow.findAll({order: [["date", "DESC"]], where: {userId}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue) => {
    try {
        await Inflow.update({description, date, firstMethod, firstValue, secondMethod, secondValue, thirdMethod, thirdValue}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await Inflow.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
