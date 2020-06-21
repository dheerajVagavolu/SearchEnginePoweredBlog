import React from "react";
import { Form, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const Login = () => {
  const cont_style = {
    padding: "30px",
  };

  return (
    <>
      <div style={cont_style} className="container">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <hr></hr>
      </div>

      <div style={cont_style} className="container">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Caption</Form.Label>
            <Form.Control placeholder="Let people know about you." />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Send me notifications through email"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
