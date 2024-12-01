const router = require('express').Router();
const {createTask, fetchAllTask, updateTaskById, deleteTaskById} = require('../controllers/TaskController')
// to get all the task

router.get('/', fetchAllTask);

// to create a task
router.post('/', createTask);

// to update task 
router.put('/:id', updateTaskById);

// to delete task 
router.delete('/:id',deleteTaskById);

module.exports = router;