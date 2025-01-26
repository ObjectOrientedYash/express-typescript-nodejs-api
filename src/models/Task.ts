import mongoose from 'mongoose';
import { ITask } from '../utility/interface';

const taskSchema = new mongoose.Schema<ITask>({
  id: {
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
});
const Task = mongoose.model('Task', taskSchema);
export default Task;
