const router = require('express').Router();

// to get all the task

router.get('/',(req,res)=>{
    res.send('All tasks')
})

module.exports = router;