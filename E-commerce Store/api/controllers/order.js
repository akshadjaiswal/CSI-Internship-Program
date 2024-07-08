import Order from "../models/order.js";

export const makeOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = newOrder.save();
    res.status(201).status(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(200).json(error);
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("cart has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = Order.findOne({ userId: req.params.id });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const monthlyIncome = async (req, res) => {
  try {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1)
    );
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: previousMonth,
          },
        },
      },
      {
        $project: {
          month: {
            $month: "$createdAt",
          },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
  }
};
