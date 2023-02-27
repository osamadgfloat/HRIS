import mongoose from "mongoose";
import dotenv from "dotenv";
import "colors";
import connectDb from "./config/db.js";
import User from "./models/userModel.js";
import users from "./data/users.js";

dotenv.config();

connectDb();

const importData = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

importData();
