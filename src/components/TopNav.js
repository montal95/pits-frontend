import React, { useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import LoggedInButtons from "../components/LoggedInButtons";
import LoggedOutButtons from "../components/LoggedOutButtons";
import { checkToken } from "../api/auth";
import { currentUser } from "../actions/auth";
import { connect } from "react-redux";

const TopNav = (props) => {
  const token = JSON.parse(localStorage.getItem("state")).auth.token;
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (token) {
      checkToken(token, history, props.currentUser);
    }
  });

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

const mapDispatchToProps = {
  currentUser,
};

export default connect(null, mapDispatchToProps)(TopNav);
