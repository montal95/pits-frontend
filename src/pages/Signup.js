import React, { useState } from "react";
import { Form, Button, Alert, Jumbotron } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { signupSuccessAction } from "../actions/auth";
import { connect } from "react-redux";

const Signup = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const newUser = {
    email: email,
    first_name: firstName,
    last_name: lastName,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    props.signupSuccessAction(newUser, history);
  };

  return (
    <Jumbotron>
        <h1 className="mb-3">Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="John"
            name="first name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Doe"
            name="last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            minLength="8"
          />
          <Form.Text muted>Must be 8-20 characters long.</Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            minLength="8"
          />
          {password !== confirmPassword ? (
            <Form.Text className="text-danger">
              Passwords do not match
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>

        {error ? <Alert variant="danger">{error}</Alert> : ""}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};

const mapDispatchToProps = { signupSuccessAction };

export default connect(null, mapDispatchToProps)(Signup);
