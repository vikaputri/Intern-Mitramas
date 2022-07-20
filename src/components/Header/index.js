import React from "react";
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Navbar.Brand>
          <NavLink to="/" className="px-3 nav-link text-uppercase text-reset">Home
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="nav-toggle-button"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav.Link className="nav-item text-uppercase px-3" href="/">Menu</Nav.Link>
            <Nav.Link className="nav-item text-uppercase px-3" href="/login">Login</Nav.Link>
            <Nav.Link className="nav-item text-uppercase px-3" href="/register">Register</Nav.Link>
            <Nav.Link className="nav-item text-uppercase px-3" href="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
  };

export default Header;