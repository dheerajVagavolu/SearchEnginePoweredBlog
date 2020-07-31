import React, { Component } from "react";
import connect from "../../images/word_cloud.png";

export class Home2 extends Component {
  render() {
    const style_sec = {
      textAlign: "center",
      padding: "80px",
      paddingBottom: "0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    const text_tyle = {
      padding: "20px",
      marginTop: "80px",
      color: "white",
      fontSize: "70px",
    };
    const hr = {
      background: "white",
      width: "70%",
      height: "10px",
    };

    const text_sim = {
      color: "white",
      fontSize: "30px",
    };
    const image_style = {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "100%",
      maxHeight: "300px",
      display: "block",
    };

    return (
      <>
        <div style={style_sec}>
          <img style={image_style} src={connect} alt="Logo"></img>
        </div>
      </>
    );
  }
}

export default Home2;
