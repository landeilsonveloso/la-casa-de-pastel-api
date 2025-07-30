import User from "../models/users.js"

export const syncAll = async () => {
    try {
        await User.sync({alter: true})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const dropAll = async () => {
    try {
        await User.drop({force: true})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
