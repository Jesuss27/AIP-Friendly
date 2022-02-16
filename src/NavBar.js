import React, { useState } from 'react'
import {Navbar, Col, Container, NavbarBrand, Nav, NavLink, NavbarToggler, Collapse, NavItem} from "reactstrap"

function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false)
  return (
      <div>
    <Navbar 
    color="primary" 
    expand="sm"
    light
    >
     
     <NavbarBrand href="/"> 
         JJ       
     </NavbarBrand> 
    <NavbarToggler onClick={ () => { setIsOpen(!isOpen)} } />
        <Collapse isOpen={isOpen } navbar>
            <Nav  className='me-auto navbar-display-flex' 
            navbar
            >
                <NavItem>
                <NavLink color="" href="/home">
                    Home
                </NavLink>
                 </NavItem>
                <NavItem>
                <NavLink>
                    About
                </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        Contact
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>
        
 
                
    </Navbar>
    </div>
  )
}

export default NavBar