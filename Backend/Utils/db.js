import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("database is connected");
  } catch (error) {
    console.error("database is not connected");
  }
};

export default connectDB;
