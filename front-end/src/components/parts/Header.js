import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = () => {
  const button1 = {
    color: "DodgerBlue",
    marginRight: "30px",
    marginTop: "10px",
    fontWeight: "600",
    marginBottom: "10px",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    fontFamily: "Arial",
  };

  const button2 = {
    color: "DodgerBlue",
    marginRight: "10px",
    marginTop: "10px",
    fontWeight: "600",
    marginBottom: "10px",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    fontFamily: "Arial",
  };

  const logo = {
    fontSize: "40px",
    marginLeft: "20px",
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: "800",
    color: "White",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <>
      <Navbar bg="primary">
        <Navbar.Brand style={logo} href="/">
          App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>

        <Nav.Link style={button2} href="/profile">
          Profile
        </Nav.Link>
        <Nav.Link style={button1} href="/login">
          Login
        </Nav.Link>
      </Navbar>
    </>
  );
};

export default Header;
