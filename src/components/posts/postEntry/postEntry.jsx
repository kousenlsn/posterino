import React from "react";
import { connect } from "react-redux";
import qs from "qs";

import {
  fetchPostOwner,
  persistPost
} from "../../../redux/actions/postsAction";
import PostEntryView from "./postEntryView";

class PostEntry extends React.Component {
  state = {
    postForm: null,
    isEditMode: false
  };

  componentDidMount() {
    if (this.props.postEntry)
      this.props.fetchOwner(this.props.postEntry.userId).then(r => {
        const query = qs.parse(this.props.location.search, {
          ignoreQueryPrefix: true
        });

        if (query.edit && query.edit === "true") this.toggleEdit(true);
      });
    else this.props.history.push("/404");
  }

  editChanges = (field, value, callback) =>
    this.setState(
      { postForm: { ...this.state.postForm, [field]: value } },
      () => callback && callback()
    );

  toggleEdit = toggle =>
    this.setState({
      isEditMode: toggle,
      postForm: toggle ? Object.assign({}, this.props.postEntry) : null
    });

  saveChanges = async post => {
    const result = await this.props.savePost(post);

    if (result.payload && result.payload.post) this.toggleEdit(false);
  };

  render() {
    return (
      <PostEntryView
        isLoading={this.props.isLoading}
        isPosting={this.props.isPosting}
        post={
          this.state.isEditMode
            ? this.state.postForm
            : this.props.postEntry || {}
        }
        user={this.props.userEntry}
        match={this.props.match}
        location={this.props.location}
        isEditMode={this.state.isEditMode}
        toggleEdit={this.toggleEdit}
        editChanges={this.editChanges}
        confirmEdit={this.saveChanges}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.page.fetchCallsInProgress > 0,
  isPosting: state.page.postCallsInProgress > 0,
  postEntry: state.posts.entries.find(
    p => p.id === parseInt(ownProps.match.params.postId)
  ),
  userEntry: state.posts.userEntry
});

const mapDispatchToProps = dispatch => ({
  fetchOwner: id => dispatch(fetchPostOwner(id)),
  savePost: post => dispatch(persistPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEntry);
