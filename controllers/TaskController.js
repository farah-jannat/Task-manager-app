const TaskModel = require('../models/TaskModel');

const createTask  = async(req,res)=>{
    const data = req.body;
    try{
        const model = new TaskModel(data)
        await model.save();
        res.status(201)
            .json({message:'task is created', success: true});
    }catch(err){
        res.status(500).json({message:'failed to create task', success:false});
    }
}

const fetchAllTask = async(req,res)=>{
    try{
        const data = await TaskModel.find({})
        res.status(201)
        .json({message:'All tasks', success:true, data})
    }catch(err){
        res.status(500).json({message:'failed to bring task', success: false})
    }
}

module.exports = {
    createTask,
    fetchAllTask
}