import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const Header = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('ACCESS_KEY');
    Swal.fire('Success!', 'Success Logout!', 'success').then(
      history.push('/')
    );
  }

  return (
    <Navbar collapseOnSelect expand="sm" className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="nav-toggle-button"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav.Link className="nav-item text-uppercase px-3" href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link className="nav-item text-uppercase px-3" onClick={handleLogout} >Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
  };

export default Header;