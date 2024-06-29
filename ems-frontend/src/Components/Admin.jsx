import { MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';



function Admin() {
//state creation
const [allEmployees,setAllEmployees]=useState([])

 //Data fetching function(first API call)
  const fetchData = async()=>{
    const response = await axios.get('http://localhost:8000/getEmployees')
    console.log(response.data.employee);
    setAllEmployees(response.data.employee)
  }

  //delete 
  const deleteEmp=async(id)=>{
  const response= await axios.delete('http://localhost:8000/deleteEmployees/'+id)
  console.log(response.data.message);
  alert(response.data.message)
  fetchData()
  }


  console.log(allEmployees);
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
        <div className="container">
            <h3 className='text-center m-3'><b>Employee Management sytyem</b></h3>
            <p style={{textAlign:'justify'}}>The term "employee management systems" is used broadly to describe a range of software systems that cover key aspects of HR admin. They are also known by other names too. Some vendors refer to their products as employee databases, while others use acronyms like HRIS (human resources information system), HCM (human capital management), or HRMS (human resource management system).Employee management systems are a core part of HR. They cover a wide range of functions, including employee records, payroll, time tracking, task management, and more.</p>

     <div className='text-end'>
      <Link to={'add'}>
      <MDBBtn style={{margin:'20px'}}> <i className='fa-solid fa-user-plus'></i>Add</MDBBtn>
      </Link>
     </div>

     <div className="table">
     <MDBTable className='my-5'>
      <MDBTableHead>
        <tr>
          <th scope='col'><b>ID</b></th>
          <th scope='col'><b>Name</b></th>
          <th scope='col'><b>Age</b></th>
          <th scope='col'><b>Designation</b></th>
          <th scope='col'><b>Salaray</b></th>
          <th scope='col'><b>Action</b></th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
        allEmployees.map((item)=>(
          <tr className='table-active'>
          <th scope='row'>{item.id}</th>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.designation}</td>
          <td>{item.salary}</td>
          <td>
            <div>
              <Link to={'/edit/'+item.id}>
              <MDBBtn className='mx-5'><i className='fa-solid fa-pen'></i></MDBBtn>
              </Link>
              <Link to={'/view/'+item.id}>
              <MDBBtn   className='mx-5'><i className='fa-solid fa-eye'></i></MDBBtn>
              </Link>
                <MDBBtn onClick={()=>deleteEmp(item.id)}    className='ms-5'><i className='fa-solid fa-trash'></i></MDBBtn>

            </div>
          </td>
        </tr>
        ))
         
      }
       
      </MDBTableBody>
    </MDBTable>
     </div>
        </div>
    </div>
  )
}

export default Admin