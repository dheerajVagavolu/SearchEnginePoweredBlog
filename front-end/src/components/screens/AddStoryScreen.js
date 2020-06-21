import React from "react";
import Header from "../parts/Header";

import { Form, Button } from "react-bootstrap";

const AddStoryScreen = () => {
  const cont_style = {
    padding: "30px",
    marginTop: "80px",
  };

  return (
    <>
      <Header />
      <div style={cont_style} className="container">
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              What was the situation? (Please be as specific as possible so that
              this story can reach the people who need it the most)
            </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              How did it turn out in the end? (Enter your success story.)
            </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Please state any advice from your experience.
            </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>

        <hr></hr>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </div>
    </>
  );
};

export default AddStoryScreen;
