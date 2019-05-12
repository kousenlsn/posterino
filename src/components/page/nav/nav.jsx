import React from "react";
import { connect } from "react-redux";

import { FETCH_POSTS_SUCCESS } from "../../../redux/actions/actionTypes";
import { fetchPosts } from "../../../redux/actions/postsAction";
import NavView from "./navView";

class NavComponent extends React.Component {
  resetData = async () => {
    const result = await this.props.fetchPosts();

    if (result.type === FETCH_POSTS_SUCCESS) this.props.history.push("/");
  };

  render() {
    return (
      <NavView resetData={this.resetData} isLoading={this.props.isLoading} />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading:
    state.page.postCallsInProgress > 1 || state.page.fetchCallsInProgress > 1
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavComponent);
