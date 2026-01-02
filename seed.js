const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Product = require("./models/Product");

dotenv.config();

const products = [
  {
    name: "Tata Salt 1kg",
    description: "Iodized salt for daily cooking",
    category: "grocery",
    brand: "Tata",
    price: 28,
    mrp: 30,
    stock: 100,
    unit: "kg",
    images: [
      "https://m.media-amazon.com/images/I/614mm2hYHyL._AC_UF894,1000_QL80_.jpg"
    ]
  },
  {
    name: "Aashirvaad Atta 5kg",
    description: "Whole wheat flour",
    category: "grocery",
    brand: "Aashirvaad",
    price: 260,
    mrp: 280,
    stock: 50,
    unit: "kg",
    images: [
      "https://images-cdn.ubuy.co.in/69411c12644b1d8083008441-aashirvaad-whole-wheat-atta-10kg-22lbs.jpg"
    ]
  },
  {
    name: "Coca Cola 750ml",
    description: "Refreshing soft drink",
    category: "drinks",
    brand: "Coca Cola",
    price: 40,
    mrp: 45,
    stock: 60,
    unit: "ml",
    images: [
      "https://m.media-amazon.com/images/I/71YBmiSj-cL._SX679_.jpg"
    ]
  },
  {
    name: "Pepsi 750ml",
    description: "Carbonated soft drink",
    category: "drinks",
    brand: "Pepsi",
    price: 40,
    mrp: 45,
    stock: 60,
    unit: "ml",
    images: [
      "https://www.jiomart.com/images/product/original/491208775/pepsi-750-ml-product-images-o491208775-p491208775-0-202505231714.jpg?im=Resize=(1000,1000)"
    ]
  },
  {
    name: "Surf Excel Easy Wash",
    description: "Detergent powder for tough stains",
    category: "household",
    brand: "Surf Excel",
    price: 120,
    mrp: 135,
    stock: 40,
    unit: "pcs",
    images: [
      "https://m.media-amazon.com/images/I/616S-2pWRfL._SX679_.jpg"
    ]
  },
  {
    name: "Nivea Men Face Wash",
    description: "Oil control face wash",
    category: "beauty",
    brand: "Nivea",
    price: 199,
    mrp: 225,
    stock: 35,
    unit: "pcs",
    images: [
      "https://distausa.com/cdn/shop/files/715XNT3XEpL_1280x.jpg?v=1761394808"
    ]
  }
];


const seedData = async () => {
  try {
    await connectDB();

    await Product.deleteMany();
    console.log("🗑️ Existing products cleared");

    await Product.insertMany(products);
    console.log("🌱 Seed data inserted successfully");

    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedData();
