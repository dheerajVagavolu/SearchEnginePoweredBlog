import React, { Component } from "react";

import { Container } from "react-bootstrap";
import Loader from "react-loader-spinner";

export class SimilarStories extends Component {
  render() {
    const { posts, loading } = this.props;

    const style = {
      width: "100%",
      textAlign: "center",
      marginTop: "300px",
    };

    if (loading) {
      return (
        <Container style={style}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={100000} //3 secs
          />
        </Container>
      );
    }

    return (
      <>
        <Container>{posts}</Container>
      </>
    );
  }
}
export default SimilarStories;
