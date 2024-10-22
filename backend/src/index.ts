require('dotenv').config();
import express, { Application } from 'express';
import connectToDB from './db/index';

// env
const uri = process.env.MONGO_URI as string;
const port = process.env.PORT || 5000;

// Express App
const app: Application = express();

// Middleware
app.use(express.json());

// Server Function
const server = async () => {
  try {
    // Connecting to MongoDB Database - if connects only then go to next step, otherwise exit
    await connectToDB(uri);
    
    // Listening Server
    app.listen(port, (err?: Error) => {
      if (err) {
        console.log('Listening Error:', err);
        process.exit(1);
      }
      console.log(`Listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Server Error:', error);
  }
};

// Starting the server
server();
