import React from "react";
import { Nav } from "react-bootstrap";

const LoggedInButtons = ({ pathname }) => {
  return (
    <Nav className="justify-content-end" activeKey={pathname}>
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
        <Nav.Link href="#signout">Log out</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default LoggedInButtons;
