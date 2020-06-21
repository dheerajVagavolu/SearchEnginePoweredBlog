import React from "react";
import { Card, Button, Accordion } from "react-bootstrap";

function truncate(str, no_words) {
  return str.split(" ").splice(0, no_words).join(" ");
}

const StoryCard = (info) => {
  const card_Style = {
    padding: "30px",
  };

  const like_button = {
    marginTop: "20px",
  };

  const acc = {
    border: "none",
    textAlign: "left",
  };

  const acc2 = {
    border: "none",
    textAlign: "left",
    background: "white",
  };

  return (
    <>
      <div style={card_Style} className="container">
        <Card className="storyCard">
          <Card.Body>
            <Card.Title>User: {info.user}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {info.body}
            </Card.Subtitle>

            <Accordion>
              <Card style={acc}>
                <Card.Header style={acc2}>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {truncate(info.sol, 10)} ...
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>{info.sol}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            {/* <Card.Link href="#">{truncate(info.sol, 15)} ...</Card.Link> */}
            {/* <Button variant="primary">View Full Story</Button> */}

            <Button style={like_button} className="btn btn-primary float-right">
              <i className="fa fa-thumbs-up">{info.likes}</i>{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default StoryCard;
