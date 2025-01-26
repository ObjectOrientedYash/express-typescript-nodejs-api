import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    console.log('mongo_uri=>>', process.env.DEV_MONGO_URI);
    await mongoose.connect(process.env.DEV_MONGO_URI as string);
    console.log('Connection to MongoDB successful');
  } catch (err: any) {
    console.error('Error occurred while connecting to database', err);
  }
};
