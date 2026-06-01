import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db/db.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Product Inventory API Running");
});

app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});