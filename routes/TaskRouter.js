const router = require('express').Router();
const {createTask} = require('../controllers/TaskController')
// to get all the task

router.get('/',(req,res)=>{
    res.send('All tasks')
})

// to create a task
router.post('/', createTask);

module.exports = router;