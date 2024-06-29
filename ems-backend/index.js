//1.import express
const express=require('express');

//2.import cors
const cors=require('cors');

//3.Create a server application using the express
const serverApp = express()


const logic = require('./services/logic')


//4.use cors and express
serverApp.use(cors({ //to connct two dffrnt ports
    origin:'http://localhost:3000'
}))

serverApp.use(express.json())

//5.server listen
serverApp.listen(8000,()=>{
    console.log('server listening on port 8000');
})

//get all Employee API call
serverApp.get('/getEmployees',(req,res)=>{
    logic.getAllEmployee().then((result)=>{
        res.status(result.statusCode).json(result)  //array of data
    })
})

//add an employee API call
serverApp.post('/addEmployees',(req,res)=>{
    logic.addEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result) //array of data
    })
})

//delete an employee
serverApp.delete('/deleteEmployees/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//view an employee
serverApp.get('/viewEmployees/:id',(req,res)=>{
    logic.viewEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


//update an employee
serverApp.post('/updateEmployees/:id',(req,res)=>{
 logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((result) =>{
    res.status(result.statusCode).json(result)
 }) 
})
