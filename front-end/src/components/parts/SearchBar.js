import React from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";

const SearchBar = () => {
  const cont_style = {
    padding: "50px 50px 20px 50px",
    marginTop: "150px",
  };

  const cont_style2 = {
    padding: "30px",
    marginTop: "100px",
    textAlign: "center",
  };

  const like_button = {
    marginTop: "20px",
  };

  const like_button2 = {
    marginTop: "20px",
    margin: "20px",
    width: "400px",
    paddingLeft: "30px",
    paddingRight: "30px",
    fontSize: "20px",
  };

  return (
    <>
      <Container style={cont_style}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <h4>Whats Bugging you?</h4>
          <Form.Control
            as="textarea"
            placeholder="Be specific to connect with people who went through a similar situation as you."
            rows="2"
          />
          <Button
            style={like_button}
            className="btn btn-primary float-right"
            variant="primary"
            type="submit"
          >
            Search
          </Button>
        </Form.Group>
      </Container>

      <Container style={cont_style2}>
        <hr />

        <Button style={like_button2} href="/SearchPage">
          Top Success Stories
        </Button>
        <Button style={like_button2} href="/addstory">
          Share your Story
        </Button>
      </Container>
    </>
  );
};

export default SearchBar;
