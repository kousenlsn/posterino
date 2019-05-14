import React from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../../../redux/actions/postsAction";
import NavView from "./navView";

class NavComponent extends React.Component {
  resetData = () => {
    this.props.fetchPosts();
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
  fetchPosts: () => dispatch(fetchPosts(true))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavComponent);
