import React, { Component } from "react";
import Header from "../parts/Header";
import axios from "axios";
import { Container } from "react-bootstrap";
import StoryCard from "../parts/StoryCard";
import SimilarStories from "../parts/SimilarStories";
import Pagination from "../parts/Pagination";

export class SearchPage extends Component {
  state = {
    posts: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 5,
  };

  componentDidMount() {
    const getPosts = async () => {
      this.setState({ loading: true });
      const results = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.setState({ posts: results.data.slice(0, 20) });
      this.setState({ loading: false });
      console.log(results.data);
    };

    getPosts();
  }

  render() {
    const { currentPage, postsPerPage, posts, loading } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPort = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPort, indexOfLastPost);

    const paginate = (pageNum) => this.setState({ currentPage: pageNum });

    var listItems = [];
    for (var key1 in currentPosts) {
      listItems.push(
        <StoryCard
          key={currentPosts[key1]["id"]}
          body={currentPosts[key1]["title"]}
          sol={currentPosts[key1]["body"]}
          user={currentPosts[key1]["userId"]}
          likes={20}
        />
      );
    }
    console.log(listItems);
    return (
      <>
        <Header />
        <SimilarStories posts={listItems} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </>
    );
  }
}
export default SearchPage;
