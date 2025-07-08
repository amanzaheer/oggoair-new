import mongoose from "mongoose";

const connect = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      // If the connection is not established, connect to the database.
      await mongoose.connect(process.env.MONGO as string);
      console.log("Database Connected.");
    } else {
      console.log("Database is already connected.");
    }
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
