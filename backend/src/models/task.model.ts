import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  isCompleted: boolean;
}

const TaskSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Task title is required'],
    },
    description: {
      type: String,
      required: [true, 'Task description is required'],
    },
    isCompleted: {
      type: Boolean,
      required: [true, 'Task IsCompleted is required'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITask>('Task', TaskSchema);
