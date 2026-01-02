const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "*", // for now
}));
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);


app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/orders", require("./routes/orderRoutes"));


app.get("/", (req, res) => {
  res.send("Victory Bazaar API Running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", service: "Victory Bazaar API" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
