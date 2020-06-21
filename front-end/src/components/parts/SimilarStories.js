import React, { Component } from "react";
import StoryCard from "./StoryCard";
import { Row, Col, Container } from "react-bootstrap";

export class SimilarStories extends Component {
  render() {
    const { posts, loading } = this.props;

    if (loading) {
      return <h2> Loading... </h2>;
    }

    return (
      <>
        <Container>{posts}</Container>
      </>
    );
  }
}
export default SimilarStories;
