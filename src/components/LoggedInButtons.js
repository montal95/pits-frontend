import React from "react";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { logoutSuccess } from "../actions/auth";
import { useHistory } from "react-router-dom";

const LoggedInButtons = (props) => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("pitsToken");
    props.logoutSuccess();
    history.push("/");
  };

  return (
    <Nav className="justify-content-end" activeKey={props.pathname}>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/plants/new">New Plant</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#" onClick={handleClick}>
          Log out
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

const mapDispatchToProps = {
  logoutSuccess,
};

export default connect(null, mapDispatchToProps)(LoggedInButtons);
