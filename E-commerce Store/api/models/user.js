import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isadmin: {
      type:Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model('User',userSchema)
export default user;