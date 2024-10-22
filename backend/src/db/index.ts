import mongoose from 'mongoose';

const connectToDB = async (url: string): Promise<void> => {
  try {
    const connection = await mongoose.connect(url);
    console.log(`Connected to MongoDB's Database Name: ${connection.connection.name}`);
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

export default connectToDB;
