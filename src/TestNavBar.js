import React from 'react'
import {Navbar,Col, Container, NavbarBrand, Nav, NavLink, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from "reactstrap"


function TestNavBar() {

    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
  <Navbar
    color="light"
    expand="sm"
    light
  >
    <Col>
      <NavbarBrand href="/">
        reactstrap
      </NavbarBrand>
    </Col>
    <Col>
      <NavbarToggler onClick={() => { setIsOpen(!isOpen)} } />
      <Collapse isOpen={isOpen} navbar>
        <Nav
          className="me-auto"
          navbar
        >
        </Nav>
        
      </Collapse>
    </Col>
  </Navbar>
</div>
  )
}

export default TestNavBar