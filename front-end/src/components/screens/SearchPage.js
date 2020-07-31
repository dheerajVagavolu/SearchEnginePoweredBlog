import React, { Component } from "react";
import Header from "../parts/Header";
import axios from "axios";

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
    console.log("Hello");
    var query = this.props.match.params.query;

    const getPosts = async () => {
      this.setState({ loading: true });
      axios.post("/posts").then((results) => {
        this.setState({ posts: results["data"]["data_new"] });
        this.setState({ loading: false });
        console.log(results["data"]["data_new"]);
      });
    };

    const getPostsnew = () => {
      this.setState({ loading: true });
      axios
        .post("/similar-posts", {
          query: query,
        })
        .then((results) => {
          this.setState({ posts: results["data"]["data_new"] });
          this.setState({ loading: false });
          console.log(results["data"]["data_new"]);
        });
    };

    if (query !== "all") {
      getPostsnew();
    } else {
      getPosts();
    }

    // getPosts();
    getPostsnew();
  }

  render() {
    const { currentPage, postsPerPage, posts, loading } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPort = indexOfLastPost - postsPerPage;

    var posts_new = [];

    for (var key in posts) {
      if (posts.hasOwnProperty(key)) {
        posts_new.push(posts[key]);
      }
    }

    const currentPosts = posts_new.slice(indexOfFirstPort, indexOfLastPost);

    const paginate = (pageNum) => this.setState({ currentPage: pageNum });

    var listItems = [];
    for (var key1 in currentPosts) {
      listItems.push(
        <StoryCard
          key={key1}
          body={currentPosts[key1]["body"]}
          sol={currentPosts[key1]["sol"]}
          user={currentPosts[key1]["username"]}
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
          totalPosts={posts_new.length}
          paginate={paginate}
        />
      </>
    );
  }
}
export default SearchPage;
