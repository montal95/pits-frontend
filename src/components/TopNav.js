import React from "react";
import { Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import LoggedInButtons from "../components/LoggedInButtons";
import LoggedOutButtons from "../components/LoggedOutButtons";
import { currentUser } from "../actions/auth";
import { connect } from "react-redux";

const TopNav = (props) => {
  const token = JSON.parse(localStorage.getItem("state"));
  const location = useLocation();

  return (
    <Navbar bg="success" expand="lg" className="mb-4">
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

const mapDispatchToProps = {
  currentUser,
};

export default connect(null, mapDispatchToProps)(TopNav);
