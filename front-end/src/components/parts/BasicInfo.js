import React from "react";
import { Jumbotron } from "react-bootstrap";

const BasicInfo = () => {
  const cont_style = {
    padding: "30px",
  };

  const space_above = {
    marginTop: "30px",
  };

  const pic = {
    width: "160px",
    height: "160px",
    padding: "30px",
    borderRadius: "50%",
    border: "1px solid black",
    margin: "auto",
  };

  const cent = {
    textAlign: "center",
  };

  return (
    <>
      <div style={cont_style} className="container">
        <Jumbotron>
          <div style={cent} className="row">
            <div style={pic} className="pic"></div>

            <div style={space_above} className="container">
              <h1>Saitama</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
            </div>
          </div>
        </Jumbotron>
      </div>
    </>
  );
};

export default BasicInfo;
