import React from "react";
import Header from "../parts/Header";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import Wave from "react-wavify";
const AddStoryScreen = () => {
  let message = React.createRef();

  let myRef1 = React.createRef();
  let myRef2 = React.createRef();
  let myRef3 = React.createRef();
  let myRef4 = React.createRef();

  const cont_style = {
    padding: "30px",
    overflowY: "hidden",
  };

  const Wave_style = {
    postion: "fixed",
    bottom: "0",
    background: "DodgerBlue",
    height: "220px",
    textAlign: "center",
    color: "white",
    fontWeight: "400",
    fontSize: "40px",
  };

  const button = {
    background: "white",
    border: "none",
  };

  let add_story = () => {
    const body = myRef1.current.value;
    const sol = myRef2.current.value;
    const advice = myRef3.current.value;
    const user = myRef4.current.value;

    let user_;

    if (user === "") {
      user_ = "@anonymous";
    } else {
      user_ = user;
    }

    Axios.post("/new-post", {
      body: body,
      sol: sol,
      advice: advice,
      user: user_,
    })
      .then((results) => {
        console.log(results);
        message.current.innerHTML = "Story Added Successfully.";
        myRef1.current.value = "";
        myRef2.current.value = "";
        myRef3.current.value = "";
        myRef4.current.value = "";
      })
      .catch((err) => {
        console.log("Error:" + err);
      });
  };

  return (
    <>
      <Header />
      <div style={cont_style} className="container">
        <Form>
          <Form.Group>
            <Form.Label>
              What was the situation? (Please be as specific as possible so that
              this story can reach the people who need it the most)
            </Form.Label>
            <Form.Control ref={myRef1} as="textarea" rows="3" />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              How did it turn out in the end? (Enter your success story.)
            </Form.Label>
            <Form.Control ref={myRef2} as="textarea" rows="3" />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Please state any advice from your experience.
            </Form.Label>
            <Form.Control ref={myRef3} as="textarea" rows="3" />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Name (Leave blank if you wish to be anonymous.)
            </Form.Label>
            <Form.Control ref={myRef4} as="input" rows="3" />
          </Form.Group>
        </Form>

        <hr></hr>
        <p ref={message}></p>
        <Button onClick={add_story} style={button}>
          <svg
            class="bi bi-plus-square"
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            fill="DodgerBlue"
          >
            <path
              fill-rule="evenodd"
              d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
            />
            <path
              fill-rule="evenodd"
              d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
            />
          </svg>
        </Button>
      </div>
      <Wave
        fill="DodgerBlue"
        paused={false}
        options={{
          height: 60,
          amplitude: 40,
          speed: 0.15,
          points: 3,
        }}
      />
      <div style={Wave_style}></div>
    </>
  );
};

export default AddStoryScreen;
