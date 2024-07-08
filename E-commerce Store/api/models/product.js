import { Int32 } from "mongodb";
import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    brand: {
      type: String,
      required: true,
    },
    sub_title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
    },
    sizes: {
      type: Array,
    },
    ratings: {
      type: String,
    },
    colors: {
      type: Array,
    },
    price: {
      type: String,
      required: true,
    },
    actual_price: {
      type: String,
      required: true,
    },
    free_delivery: {
      type: Boolean,
      required: true,
    },
    cash_on_delivery: {
      type: Boolean,
      required: true,
    },
    return30days: {
      type: Boolean,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("Product",productSchema)
export default product;
