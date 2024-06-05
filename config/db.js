import mongoose from "mongoose";
import colors from "colors";

// Function to connect to MongoDB database
const connectDb = async () => {
  try {
    // Attempt to establish a connection to the MongoDB database using the provided URL
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDb;
