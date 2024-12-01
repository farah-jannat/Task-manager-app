const TaskModel = require('../models/TaskModel');

const createTask  = async(req,res)=>{
    const data = req.body;
    try{
        const model = new TaskModel(data)
        await model.save();
        res.status(200)
            .json({message:'task is created', success: true});
    }catch(err){
        res.status(500).json({message:'failed to create task', success:false});
    }
}

const fetchAllTask = async(req,res)=>{
    try{
        const data = await TaskModel.find({})
        res.status(200)
        .json({message:'All tasks', success:true, data})
    }catch(err){
        res.status(500).json({message:'failed to bring task', success: false})
    }
}

const updateTaskById = async(req,res)=>{
    try{
        const id = req.params.id;
        const body = req.body;
        const obj = {$set: {...body}};
        await TaskModel.findByIdAndUpdate(id,obj);
        res.status(200)
        .json({message:'task updated', success:true});
    }catch(err){
        res.status(500).json({message:"failed to update task", success:false});
    }
}

module.exports = {
    createTask,
    fetchAllTask,
    updateTaskById
}