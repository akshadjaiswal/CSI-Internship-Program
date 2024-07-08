import Cart from "../models/cart.js";

export const addToCart = async (req, res) => {
  try {
    const addedProduct = new Cart(req.body);
    savedCart = addedProduct.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("cart deleted successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
};
