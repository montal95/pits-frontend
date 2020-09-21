import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class TopNav extends Component {
  render() {
    const token = localStorage.getItem("pitsToken");
    const { location } = this.props;
    const signedOutButtons = (
      <Nav className="justify-content-end" activeKey={location.pathname}>
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

    const loggedInButtons = (
      <Nav className="justify-content-end" activeKey={location.pathname}>
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

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">PITS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {!token ? signedOutButtons : loggedInButtons}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(TopNav);
