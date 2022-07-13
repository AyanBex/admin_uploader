import mongoose from "mongoose";
const itemSchema = mongoose.Schema(
  {
    title: String,
    subtitle: String,
    image: String,
  },
  { timestamps: true }
);
const Item = mongoose.model("Item", itemSchema);
export default Item;
