const nodemailer = require("nodemailer")
const { google_key } = require("../../secret.json")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "patricioanastacio01@gmail.com",
        pass: google_key
    }
})

transporter.verify().then(() => {
    console.log("mail config ready...")
})

module.exports = transporter