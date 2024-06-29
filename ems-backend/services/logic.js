//implementing logics
// -------------------------

//import db
const db = require('./db')

//get all employees deatils
const getAllEmployee=()=>{
    return db.Employee.find().then((response)=>{
        if(response){
            return{
                statusCode:200,
                employee:response //array of employees
            }
        }
        else{
            return{
                statusCode:404,
                message:'No such employee Found'
            }
        }
    })
}

//add employee
const addEmployee=( id, name, age, designation, salary )=>{
   return db.Employee.findOne({id}).then((result)=>{
    if(result){
        return{
            statusCode:401,
            message:'Employee Already Exists'
        }
    }
    else{
        //store employee details in db
        const newEmployee=db.Employee({ id, name, age, designation, salary })
        newEmployee.save() //to save employee details in database
        return{
            statusCode:200,
            message:'Employee Addedd Successfully'
        }
    }
    
   })
}

//delete an employee from the database
const deleteEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:'Employee deleted Successfully'
            }
        }
        else{
            return{
                statusCode:404,
                message:'Employee not Found'
            }
        }
    })
}

//view particular employee
const viewEmployee=(id)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
               anEmployee:result
            }
        }
        else{
            return{
                statusCode:404,
                message:'No Such Employee'
            }
        }
    })
}

//edit an employee
const updateEmployee = (id,name,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;
            result.save(); //to update changes in db
            return{
                statusCode:200,
                message:"Employee data Updated Successfully"
            }
        }
        else{
            return{
                statusCode:401,
                message:"couldn't find employee"
            }
        }
    })
}

module.exports={
    getAllEmployee,
    addEmployee,
    deleteEmployee,
    viewEmployee,
    updateEmployee
}


