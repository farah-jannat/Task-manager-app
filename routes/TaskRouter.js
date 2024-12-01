const router = require('express').Router();
const {createTask, fetchAllTask} = require('../controllers/TaskController')
// to get all the task

router.get('/', fetchAllTask);

// to create a task
router.post('/', createTask);

module.exports = router;