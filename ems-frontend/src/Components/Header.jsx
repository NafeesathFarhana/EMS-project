import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div><MDBNavbar light bgColor='dark'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='/' className='text-white '>
       <i class="fa-solid fa-user-group m-4 fs-3"></i>
        Employee Management System
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header