import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function NavBar() {
   return (
      <div>
         <Navbar bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="/home">Coupon System</Navbar.Brand>
               <Nav className="me-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/Login">Login</Nav.Link>
                  <Nav.Link href="/Logout">Logout</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                     <NavDropdown.Item href="/AdminPage">Admin</NavDropdown.Item>
                     <NavDropdown.Item href="/CompanyPage">Company</NavDropdown.Item>
                     <NavDropdown.Item href="/CustomerPage">Customer</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Container>
         </Navbar>
      </div>
   )
}

export default NavBar