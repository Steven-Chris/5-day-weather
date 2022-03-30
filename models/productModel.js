const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    category: {
      type: [String],
      required: "Category is required",
    },
    price: {
      type: String,
      required: "Price is required",
    },
    user_id: {
      type: String,
      required: "User ID is required",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
