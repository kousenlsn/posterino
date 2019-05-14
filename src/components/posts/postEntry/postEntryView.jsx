import React, { useState } from "react";
import { Link } from "react-router-dom";
import withStyles from "react-jss";
import { Prompt } from "react-router";

import styles from "./postEntryStyles";

import QueueAnim from "rc-queue-anim";
import { Row, Col, Layout, Breadcrumb, Spin } from "antd";
import { Button, Form, Input } from "antd";
const { Content } = Layout;

const PostEntry = ({
  isLoading,
  isPosting,
  post,
  user,
  match,
  location,
  isEditMode,
  toggleEdit,
  editChanges,
  confirmEdit,
  classes
}) => {
  const [showValidationErrors, toggleValidationErrors] = useState(false);

  // prettier-ignore
  const validations = (post => {
    return {
      title: (field => field && field.length >= 3 && field.length <= 250)(post.title),
      body: (field => field && field.length >= 3)(post.body)
    }
  })(post);

  const isFieldInvalid = field =>
    isEditMode && showValidationErrors && !validations[field];

  const validate = () => {
    const anyInvalid = Object.keys(validations).some(
      field => !validations[field]
    );

    if (!anyInvalid) {
      toggleValidationErrors(false);
      confirmEdit(post);
    } else {
      toggleValidationErrors(true);
    }
  };

  return (
    <QueueAnim delay={50} duration={[500, 0]} type="left">
      <Content className={classes.container} key="postEntry">
        <div className={classes.headerContainer}>
          <Breadcrumb className={classes.pageBreadcrumbsSection} separator=">">
            <Breadcrumb.Item>Page</Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/"> Posts </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link
                to={`/posts/${match.params.postId}${location.search || ""}`}
              >
                {post ? post.title : ""}
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>

          <div className={classes.actionsContainer}>
            {isEditMode && (
              <Button
                type="primary"
                className={classes.button}
                style={{ marginRight: 10 }}
                onClick={() => {
                  validate(post);
                }}
                disabled={isPosting}
              >
                Save
              </Button>
            )}
            <Button
              type="primary"
              className={classes.button}
              style={{ marginRight: 10 }}
              onClick={() => {
                toggleEdit(!isEditMode);
              }}
              disabled={isPosting}
            >
              {isEditMode ? "Cancel" : "Edit"}
            </Button>
          </div>
        </div>

        <div>
          {isLoading ? (
            <div className={classes.paperContainer}>
              <div className={classes.spinner}>
                <Spin size="large" />
              </div>
            </div>
          ) : (
            <Row gutter={16}>
              <Col xs={24} lg={18} style={{ paddingBottom: 8 }}>
                <div className={classes.paperContainer}>
                  <Form layout="vertical">
                    <Form.Item
                      className={classes.titleContainer}
                      validateStatus={isFieldInvalid("title") ? "error" : ""}
                      help={
                        isFieldInvalid("title") &&
                        "Title is mandatory, 3 to 100 characters."
                      }
                    >
                      {isEditMode ? (
                        <Input
                          placeholder="Title"
                          value={post.title}
                          onChange={e => editChanges("title", e.target.value)}
                          className={`${classes.title} ${
                            isEditMode
                              ? classes.inputText
                              : classes.inputDisabled
                          }`}
                          disabled={!isEditMode}
                        />
                      ) : (
                        <span
                          className={`${classes.title} ${
                            classes.inputDisabled
                          }`}
                        >
                          {post.title}
                        </span>
                      )}
                    </Form.Item>

                    <Form.Item
                      className={classes.inputContainer}
                      validateStatus={isFieldInvalid("body") ? "error" : ""}
                      help={
                        isFieldInvalid("body") &&
                        "Body is mandatory, at least 3 characters."
                      }
                    >
                      <Input.TextArea
                        autosize={{ minRows: 1, maxRows: 9 }}
                        placeholder="Body"
                        value={post.body}
                        onChange={e => editChanges("body", e.target.value)}
                        className={`${
                          isEditMode ? classes.inputText : classes.inputDisabled
                        }`}
                        disabled={!isEditMode}
                      />
                    </Form.Item>
                  </Form>
                </div>
              </Col>
              <Col xs={24} lg={6} style={{ paddingBottom: 8 }}>
                <div className={classes.paperContainer}>
                  <span className={classes.subtitle}>Post #{post.id}</span>
                  <br />
                  {user && (
                    <>
                      by {user.name}
                      <br />
                      <br />@{user.username}
                      <br />
                      {user.email}
                      <br />
                      {user.address &&
                        `${user.address.city} - ${user.address.zipcode}`}
                      <br />
                      {user.company && user.company.name}
                    </>
                  )}
                </div>
              </Col>
            </Row>
          )}
        </div>

        <Prompt
          when={isEditMode}
          message="You may have unsaved changes, are you sure you want to leave?"
        />
      </Content>
    </QueueAnim>
  );
};

export default withStyles(styles)(PostEntry);
