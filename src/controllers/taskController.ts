import {Request, Response} from 'express';
import Task from '../models/Task';
import {exec} from 'child_process';

export const createTask = async (req: Request, res: Response) => {
    try {
        const newTask = new Task({
            name: req.body.name
        });
        const response = await newTask.save();
        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: response
        });
    } catch (error: any) {
        console.error('Error creating task:', error);
        return res.status(500).json({error: 'Error creating task'});
    }
};
export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({
            success: true,
            message: 'Tasks fetched successfully',
            data: tasks
        });
    } catch (error: any) {
        console.error('Error fetching tasks:', error);
        return res.status(500).json({error: 'Error fetching tasks'});
    }
};
export const getTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findById({
            _id: req.params.id
        });
        res.status(200).json({
            success: true,
            message: 'Task fetched successfully',
            data: task
        });
    } catch (error: any) {
        console.error('Error fetching task:', error);
        return res.status(500).json({error: 'Error fetching task'});
    }
};
export const updateTask = async (req: Request, res: Response) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            {
                _id: req.params.id
            },
            {
                name: req.body.name
            }
        );
        if (updatedTask) {
            res.status(200).json({
                success: true,
                message: 'Task updated successfully'
            });
        }
    } catch (error: any) {
        console.error('Error while updating task:', error);
        return res.status(500).json({error: 'Error updating task'});
    }
};
export const deleteTask = async (req: Request, res: Response) => {
    try {
        const deletedTask = await Task.findByIdAndDelete({
            _id: req.params.id
        });
        if (deletedTask) {
            res.status(200).json({
                success: true,
                message: 'Task deleted successfully'
            });
        }
    } catch (error: any) {
        console.error('Error deleting task:', error);
        return res.status(500).json({error: 'Error deleting task'});
    }
};
export const deleteFolderScript = async (req: Request, res: Response) => {
    const folderName = req.params.name;
    const command = `rmdir /s /q ${folderName}`;
    try {
        await deleteFolderHelper(command);
        res.status(200).json({
            success: true,
            message: 'Folder deleted successfully'
        });
    } catch (err) {
        return res.status(500).json({error: err});
    }
};

const deleteFolderHelper = async (command: string) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout) => {
            if (error) {
                reject(`Error: ${error.message}`);
            } else {
                resolve(stdout);
            }
        });
    });
};
const taskController = {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    deleteFolderScript
};
export default taskController;
