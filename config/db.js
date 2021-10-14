import mongoose from "mongoose";
import config from "config";

//get connection string
const db = config.get("mongoURI");

//connect to mongodb

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
    });
    console.log(`connected to mongoDB`);
  } catch (error) {
    console.error(error.message);
    //exist with a fail code
    process.exit(1);
  }
};
export default connectDB;
