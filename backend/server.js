const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS (simple & working)
app.use(cors());
app.use(express.json());

// ✅ Routes
const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/item");

app.use("/api", authRoutes);
app.use("/api", itemRoutes);

// ✅ MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});