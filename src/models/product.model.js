import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    detail: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
    },
  
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", userSchema);