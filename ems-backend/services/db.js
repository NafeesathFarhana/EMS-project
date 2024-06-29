//node + mongodb connection

//import mongoose-connection for node and mongodb
const mongoose= require('mongoose');


//connect mongodb
mongoose.connect('mongodb://localhost:27017/EMS')


//create a model and schema
const Employee =mongoose.model('Employee',{
    id:Number,
    name:String,
    age:Number,
    designation:String,
    salary:Number,
})

module.exports={
    Employee
}