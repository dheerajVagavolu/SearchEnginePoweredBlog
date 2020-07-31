import React, { Component } from "react";

export class Home2 extends Component {
  render() {
    const style_sec = {
      padding: "20px",
      color: "DodgerBlue",
      textAlign: "center",
      marginTop: "0px",
    };

    const text_tyle = {
      padding: "20px",
      fontSize: "70px",
    };

    const hr = {
      background: "white",
      width: "70%",
      height: "10px",
    };

    const text_sim = {
      fontSize: "30px",
    };

    return (
      <>
        <div style={style_sec}>
          <div style={text_tyle} className="container">
            PeerConnect
          </div>
          <hr style={hr} />
          <div style={text_sim}>
            An AI based solution to connect you with like minded people.
          </div>
        </div>
      </>
    );
  }
}

export default Home2;
