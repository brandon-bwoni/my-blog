import mongoose from "mongoose";

const db_url = process.env.NEXT_PRIVATE_MONGODB_URL as string

export const connectDB = async (): Promise<void> => {
  try{
    await mongoose.connect(db_url);
  console.log("DB Connected");
  } catch(error){
    console.log("Error connecting to DB", error);
    throw error
  }
};