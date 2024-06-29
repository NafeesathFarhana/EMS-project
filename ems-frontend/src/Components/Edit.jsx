import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';



function Edit() {
//usenavigate
const history = useNavigate()//used to redirect from one component to another

const {id}=useParams()
console.log(id); //id

//state creation
const[empid,setempId] = useState('')
const[empname,setempName] = useState('')
const[empage,setempAge] = useState('')
const[empdesignation,setempDesignation] = useState('')
const[empsalary,setempSalary] = useState('')




//to get particular id details
const fetchData=async(id)=>{
  const response = await axios.get('http://localhost:8000/viewEmployees/'+id)
  console.log(response.data.anEmployee); //particular  employee data object

  setempId(response.data.anEmployee.id)
  setempName(response.data.anEmployee.name)
  setempAge(response.data.anEmployee.age)
  setempDesignation(response.data.anEmployee.designation)
  setempSalary(response.data.anEmployee.salary)
  }

//defining handleAdd
const handleUpdate = async (e) => {
const body = {id: empid,name: empname, age: empage, designation: empdesignation,salary: empsalary }
const result = await axios.post('http://localhost:8000/updateEmployees/'+id,body)
console.log(result);
alert(result.data.message)
history('/')
}
console.log(empid,empname,empage,empdesignation,empsalary);


  // console.log(empid,empname,empage,empdesignation,empsalary);
   useEffect(()=>{
    fetchData(id)
  },[])

  return (
    <>
      <div className="container">
        <h3 className='text-center m-3'>Update Employee Details</h3>

        {/* form */}
        <div className='container form w-50 '>
          <MDBInput label='Id'  onChange={(e) => setempId(e.target.value)} value={empid}   type='text' size='lg' />
          <br />
          <MDBInput label='Name'  onChange={(e) => setempName(e.target.value)} value={empname}    type='text' size='lg' />
          <br />
          <MDBInput label='Age'  onChange={(e) => setempAge(e.target.value)} value={empage}   type='text' size='lg' />
          <br />
          <MDBInput label='Designation'  onChange={(e) => setempDesignation(e.target.value)} value={empdesignation}   type='text' size='lg' />
          <br />
          <MDBInput label='salary'  onChange={(e) => setempSalary(e.target.value)} value={empsalary}   type='text' size='lg' />
          <br />
        </div>

        {/* button */}
        <div className='text-center m-3'>
          <MDBBtn onClick={(e) => handleUpdate(e)}>Update</MDBBtn>
        </div>

      </div>
    </>
  )
}

export default Edit