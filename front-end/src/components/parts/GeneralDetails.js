import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const GeneralDetails = () => {
  const cont_style = {
    padding: "30px",
  };

  return (
    <>
      <div style={cont_style} className="container">
        <Jumbotron fluid>
          <Container>
            <h1>Basic Details</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </div>
    </>
  );
};

export default GeneralDetails;
