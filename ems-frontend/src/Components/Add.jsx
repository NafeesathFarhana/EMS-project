import React, { useState } from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Add() {
  const location = useNavigate()//used to redirect from one component to another
  //create state for holdingg values from the form feilds
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState('')

  //defining handleAdd function
  const handleAdd = async (e) => {
    const body = { id, name, age, designation, salary }
    
    //make API call to add employee details
    await axios.post('http://localhost:8000/addEmployees', body).then((response) => {
      console.log(response);
      alert(response.data.message)
      location('/') //redirect to admin page
    }).catch((error) => {
      console.log(error);
      alert("Enter unique employee id")
    })

    console.log(id, name, age, designation, salary);
  }

  return (
    <>
      <div className="container">
        <h3 className='text-center m-3'>Add Employee Details</h3>

        {/* form */}
        <div className='container form w-50 '>
          <MDBInput label='Id' onChange={(e) => setId(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='Name' onChange={(e) => setName(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='Age' onChange={(e) => setAge(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='Designation' onChange={(e) => setDesignation(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
          <MDBInput label='salary' onChange={(e) => setSalary(e.target.value)} id='formControlLg' type='text' size='lg' />
          <br />
        </div>

        {/* button */}
        <div className='text-center m-3'>
          <MDBBtn onClick={(e) => handleAdd(e)}>Add</MDBBtn>
        </div>

      </div>

    </>
  )
}

export default Add