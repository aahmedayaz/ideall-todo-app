require('dotenv').config();
import express, { Application } from 'express';
import connectToDB from './db/index';
import taskRoutes from './routes/task.routes';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/api/tasks', taskRoutes);

const uri = process.env.MONGO_URI as string;
const port = process.env.PORT || 5000;

// Server 
const server = async () => {
  try {
    // Connecting to MongoDB Database - if connects only then go to next step, otherwise exit
    await connectToDB(uri);
    
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
