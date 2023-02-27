import express from "express";
import dotenv from "dotenv";
import "colors";
import connectDb from "./config/db.js";

dotenv.config();

connectDb();

const app = express();

//Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));
