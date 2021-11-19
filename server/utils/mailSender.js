const transporter = require('../config/mailer')

const sendOrderRegistered = async (recipient, order) => {
    return transporter.sendMail({
        from: "Order registrada!",
        to: recipient,
        subject: "Order registrada!",
        html:`
        <h3>Tu orden fue registrada con exito!</h3>
        <h4>Items comprados:</h4>
        <ul>
            ${order.items.map(item => `<li>${item.quantity} ${item.name}`)}
        </ul>
        total: $${order.total}
        <br />
        <br />
        <br />
        <p>id de la orden: ${order._id}</p>
        `
    })
}

const sendOrderConfirmed = async (recipient, order) => {
    return transporter.sendMail({
        from: "Order confirmada!",
        to: recipient,
        subject: "Order confirmada!",
        html:`
        <h3>En los proximos dias tus productos llegaran a tu casa!</h3>
        <h4>Items comprados:</h4>
        <ul>
            ${order.items.map(item => `<li>${item.quantity} ${item.name}`)}
        </ul>
        total: $${order.total}
        <br />
        <br />
        <br />
        <p>id de la orden: ${order._id}</p>
        `
    })
}

const sendOrderRejected = async (recipient, order) => {
    return transporter.sendMail({
        from: "Order cancelada",
        to: recipient,
        subject: "Order cancelada!",
        html:`
        <h3>Tu orden fue cancelada :C</h3>
        <h4>Items comprados:</h4>
        <br />
        <br />
        <br />
        <p>id de la orden: ${order._id}</p>
        `
    })
}


module.exports = { sendOrderRegistered, sendOrderConfirmed, sendOrderRejected }