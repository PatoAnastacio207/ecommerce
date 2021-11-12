const User = require("../models/User");

class UsersController {
    static async register (req, res, next) {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (user) return res.send("Email ya registrado")
            const newUser = new User(req.body)
            await newUser.save()
            res.status(201).json(newUser)
        } catch {
            return res.send("Credenciales incorrectas")
        }
    }
    static async login (req, res, next) {
        res.json(req.user)
    }
    static async logout (req, res, next) {
        req.logOut()
        res.sendStatus(200)
    }
    static async getLogged (req, res, next) {
        if (req.user) res.send(req.user)
        else res.sendStatus(401)
    }
    static async editUser (req, res, next) {
        await User.updateOne({ _id: req.params.id }, req.body)
        const userUpdated = await User.findOne({ _id: req.params.id})
        res.json(userUpdated)
    }
    static async switchAdmin (req, res, next) {
        let user = await User.findOne({ _id: req.params.id })
        user.switchAdmin()
        user = await User.findOne({ _id: req.params.id })
        res.send(user)
    }
    static async deleteUser (req, res, next) {
        let user = await User.findOne({ _id: req.params.id })
        await User.deleteOne({ _id: req.params.id })
        res.json(user)
    }
    static async getAllUsers (req, res, next) {
        const users = await User.find()
        res.json(users)
    }
}

module.exports = UsersController