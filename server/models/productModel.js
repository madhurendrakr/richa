import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProductSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isApproved:{
    type:Boolean,
    required:false,
    default:false
  },
  addedBy: {
    type: String,
    ref: "User",
    required: true,
  },
});

export const Product = mongoose.model("Product",ProductSchema);
