import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function NavBar() {
   return (
      <div>
         <Navbar className='NAV' variant="dark">
            <Container>
               <Navbar.Brand href="/main">Coupon Home
                  <h6>
                     Shop more, spend less
                  </h6>
               </Navbar.Brand>
               <Nav className="me-auto">
                  <NavDropdown title="Coupons" id="basic-nav-dropdown">
                     <NavDropdown.Item href="/About">About</NavDropdown.Item>
                     <NavDropdown.Item href="/ContactUs">Contact Us</NavDropdown.Item>
                     <NavDropdown.Item href="/Coupons">Coupons</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/Login">Login</Nav.Link>
                  <Nav.Link href="/Logout">Logout</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      </div>
   )
}

export default NavBar