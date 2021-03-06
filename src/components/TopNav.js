import React from "react";
import { Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import LoggedInButtons from "../components/LoggedInButtons";
import LoggedOutButtons from "../components/LoggedOutButtons";
import { currentUser } from "../actions/auth";
import { connect } from "react-redux";
import logo from "../logo.png";

const TopNav = (props) => {
  const location = useLocation();

  return (
    <Navbar bg="success" expand="lg" className={"mb-3"}>
      <Navbar.Brand href="/">
        <img
          src={logo}
          alt="PITS logo"
          style={{ height: "0.8em", width: "0.8em", marginBottom: "5px" }}
        />{" "}
        PITS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        {props.auth === null ? (
          <LoggedOutButtons pathname={location.pathname} />
        ) : (
          <LoggedInButtons pathname={location.pathname} />
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  currentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
