import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function View() {

  const {id} =useParams()
  console.log(id);

//state creation
 const[employeeData,setEmployeeData ]=useState([])

  //view API fetch
const viewEmp =async(id)=>{
const response = await axios.get('http://localhost:8000/viewEmployees/'+id)
console.log(response.data.anEmployee);
    setEmployeeData(response.data.anEmployee)
  }
  console.log(employeeData);
  useEffect(()=>{
    viewEmp(id)
  },[])

  return (
    <div className='container p-5 '>
      {
         <MDBCard>
         <MDBCardImage src='https://www.michaelpage.co.in/sites/michaelpage.co.in/files/2021-05/employee%20engagement%20employee%20recognition%20970.jpg' height={'300px'} width={'200px'} position='top' alt='...' />
         <MDBCardBody>
           <MDBCardTitle className='text-center'>Id:{employeeData.id}</MDBCardTitle>
           <MDBCardText className='text-center'>
             Name:{employeeData.name}
           </MDBCardText>
           <MDBCardText className='text-center'>
             Age:{employeeData.age}
           </MDBCardText>
           <MDBCardText className='text-center'>
             Designation:<b>{employeeData.designation}</b>
           </MDBCardText>
           <MDBCardText className='text-center'>
             Salary:<b>{employeeData.salary}</b>
           </MDBCardText>
         <div  className='text-center' >
         <MDBBtn href='/'>Back to Home</MDBBtn>
         </div>
         </MDBCardBody>
       </MDBCard>
      }
    </div>
  )
}

export default View