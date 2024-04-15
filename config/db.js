import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect();
    console.log("Database connected sucessfully" + conn.connection.host);
  } catch (err) {
    console.log(err, "error");
  }
};

export default connectDB;
