const Order = require("../models/Order");
const User = require("../models/User");
const transporter = require("../config/mailer");
const {
  sendOrderRegistered,
  sendOrderRejected,
  sendOrderConfirmed,
} = require("../utils/mailSender");

class OrdersController {
  static async addOrder(req, res, next) {
    try {
      if (
        req.user &&
        req.user._id == req.body.user._id &&
        req.body.cart.items.length > 0
      ) {
        // Crear orden
        const order = new Order({
          items: req.body.cart.items.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            productId: item._id,
          })),
          status: "pending",
          date: new Date(),
          checkoutInfo: {
            ...req.user.checkoutInfo,
          },
          userId: req.user._id,
          total: req.body.cart.total,
        });
        await sendOrderRegistered(req.body.user.email, order);
        await order.save();
        return res.send(order);
      }
      return res.sendStatus(401);
    } catch (err) {
      return next(err);
    }
  }
  static async getOrders(req, res, next) {
    try {
      const orders = await Order.find();
      return res.send(orders);
    } catch (err) {
      return next(err);
    }
  }
  static async getUserOrders(req, res, next) {
    try {
      const orders = await Order.find({ userId: req.user._id });
      return res.send(orders);
    } catch (err) {
      return next(err);
    }
  }
  static async updateStatus(req, res, next) {
    try {
      if (
        req.body.status === "completed" ||
        req.body.status === "rejected" ||
        req.body.status === "pending"
      ) {
        await Order.updateOne(
          { _id: req.params.id },
          { status: req.body.status }
        );
        const order = await Order.findOne({ _id: req.params.id });
        const user = await User.findOne({ _id: order.userId });
        req.body.status === "rejected"
          ? sendOrderRejected(user.email, order)
          : req.body.status === "completed"
          ? sendOrderConfirmed(user.email, order)
          : null;
        return res.send(order);
      } else {
        return res.sendStatus(400);
      }
    } catch (err) {
      return next(err);
    }
  }
  static async getSingleOrder(req, res, next) {
    try {
      const order = await Order.find({ _id: req.params.id });
      if (req.user && (req.user.isAdmin || order.authorId === req.user._id))
        return res.send(order[0]);
      else return res.sendStatus(401);
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = OrdersController;
