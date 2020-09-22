import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { userAuth } from "../api/auth";
import { loginSuccess } from "../actions/auth";
import { connect } from "react-redux";

const Login = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email: email, password: password };
    const result = await userAuth(formData, props.loginSuccess);
    if (!result.error) {
      history.push("/dashboard");
    } else {
      setError(result.error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
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

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Form.Text muted>Must be 8-20 characters long.</Form.Text>
        </Form.Group>
        {error ? <Alert variant="danger">{error}</Alert> : ""}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapDispatchToProps = { loginSuccess };

export default connect(null, mapDispatchToProps)(Login);
