import mongoose from "mongoose";
import { Schema } from "mongoose";

const MessageSchema = Schema({
  id: {
    type: String,
    required: true,
    default: new Date().getDate(),
  },
  sender: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export const Message = mongoose.model("Message", MessageSchema);
