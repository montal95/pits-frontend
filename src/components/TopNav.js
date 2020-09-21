import React from "react";
import { Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import LoggedInButtons from "../components/LoggedInButtons";
import LoggedOutButtons from "../components/LoggedOutButtons";

const TopNav = () => {
  const token = localStorage.getItem("pitsToken");
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">PITS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        {!token ? (
          <LoggedOutButtons pathname={location.pathname} />
        ) : (
          <LoggedInButtons pathname={location.pathname} />
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
