import express from 'express';
import taskController from '../controllers/taskController';

const router = express.Router();

router.get('/getAllTasks', taskController.getAllTasks);
router.get('/getTask/:id', taskController.getTask);
router.post('/createTask', taskController.createTask);
router.put('/updateTask/:id', taskController.updateTask);
router.delete('/deleteTask/:id', taskController.deleteTask);
router.delete('/deleteFolderScript/:name', taskController.deleteFolderScript);
export default router;
