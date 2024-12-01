const router = require('express').Router();
const {createTask, fetchAllTask, updateTaskById} = require('../controllers/TaskController')
// to get all the task

router.get('/', fetchAllTask);

// to create a task
router.post('/', createTask);

router.put('/:id', updateTaskById);

module.exports = router;