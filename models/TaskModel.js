const mongoose = require('mongoose');
const schema  = mongoose.schema;

const TaskSchema = new schema({
    taskName:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        required: true
    }
});

const TaskModel = mongoose.model('todos' , TaskSchema);
module.exports = TaskModel