import React from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../../../redux/actions/postsAction";

import PostListView from "./postListView";

class PostList extends React.Component {
  componentDidMount() {
    if (this.props.posts.length < 1) this.props.fetchPosts();
  }

  render() {
    return (
      <PostListView isLoading={this.props.isLoading} posts={this.props.posts} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.page.fetchCallsInProgress > 0,
  posts: state.posts.entries
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
