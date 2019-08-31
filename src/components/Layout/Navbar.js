import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">
          jewely
        </Link>
        <NavbarToggler onClick={handleToggle} />
        <Collapse isOpen={toggle} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Products
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/slider" className="nav-link">
                Slider
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
