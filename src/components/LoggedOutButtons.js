import React from "react";
import { Nav } from "react-bootstrap";

const LoggedOutButtons = ({ pathname }) => {
  return (
    <Nav className="justify-content-end" activeKey={pathname}>
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/signup">Sign Up</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default LoggedOutButtons;
