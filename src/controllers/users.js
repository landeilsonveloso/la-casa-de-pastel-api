import { createTransport } from "nodemailer"
import { compare, hash } from "bcrypt"
import envConfig from "../config/config.js"
import jwt from "jsonwebtoken"
import User from "../models/users.js"

export const create = async (name, email, password) => {
    try {
        const user = await User.findOne({where: {email}})
        
        if (user) {
            throw new Error("Usuário já cadastrado!")
        }
        
        password = await hash(password, 8)
        
        await User.create({name, email, password})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const signIn = async (email, password) => {
    try {
        const user = await User.findOne({where: {email}})
        
        if (!user) {
            throw new Error("Usuário não cadastrado!")
        }
        
        const isMatch = await compare(password, user.password)

        if (!isMatch) {
            throw new Error("Senha inválida!")
        }
        
        return jwt.sign({userId: user.id}, envConfig.JWT_SECRET, {expiresIn: "7d"})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const forgotPassword = async (email) => {
    try {
        const user = await User.findOne({where: {email}})
        
        if (!user) {
            throw new Error("Usuário não cadastrado!")
        }
        
        const link = `https://inventory-app-azure.vercel.app/redefinepassword`

        const transport = createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {user: envConfig.SUPPORT_EMAIL, pass: envConfig.APP_PASSWORD}
        })
        
        const mailOptions = {
            from: `Landeilson Veloso <${envConfig.SUPPORT_EMAIL}>`,
            to: `${user.email}`,
            subject: "Solicitação de Alteração de Senha",
            html: `
                    <p>
                        Olá, ${user.name}!
                    <p/>

                    <p>
                        Acesse o link para alterar sua senha: <a href="${link}">Alterar Senha<a/>
                    <p/>
                `
        }
    
        await transport.sendMail(mailOptions)
    
        return jwt.sign({userId: user.id}, envConfig.JWT_SECRET, {expiresIn: 3600})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const redefinePassword = async (id, password) => {
    try {
        password = await hash(password, 8)

        await User.update({password}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const findByPk = async (id) => {
    try {
        return await User.findByPk(id, {attributes: ["name", "email"]})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const update = async (id, name, email) => {
    try {
        const user = await User.findOne({where: {email}})

        if (user && id != user.id) {
            throw new Error("Usuário já cadastrado!")
        }

        await User.update({name, email}, {where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}

export const destroy = async (id) => {
    try {
        await User.destroy({where: {id}})
    }
    
    catch (err) {
        throw new Error(err.message)
    }
}
