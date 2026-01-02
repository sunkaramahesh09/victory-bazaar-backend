const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength:3
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: ["grocery", "beauty", "drinks", "household"],
      required: true
    },
    brand: {
      type: String
    },
    price: {
      type: Number,
      required: true,
      min:0
    },
    mrp: {
      type: Number,
      min:0
    },
    stock: {
      type: Number,
      default: 0,
      min:0
    },
    unit: {
      type: String,
      required: true
    },
    images: {
      type: [String],
      default: []
    },
    isActive: {
      type: Boolean,
      default: true
    },
    attributes: {
      type: Object,
      default: {}
    },
    createdBy: {
        type: String,
        default: "admin"
}

  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
