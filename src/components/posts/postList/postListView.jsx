import React from "react";
import withStyles from "react-jss";
import { Link } from "react-router-dom";

import styles from "./postListStyles";

import QueueAnim from "rc-queue-anim";
import { Layout, Breadcrumb, Spin, List } from "antd";
const { Content } = Layout;

const PostList = ({ isLoading, posts, classes }) => {
  return (
    <QueueAnim delay={50} duration={[500, 0]} type="left">
      <Content className={classes.container} key="postsList">
        <div>
          <Breadcrumb className={classes.pageBreadcrumbsSection} separator=">">
            <Breadcrumb.Item>Page</Breadcrumb.Item>
            <Breadcrumb.Item>Posts</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className={classes.paperContainer}>
          {isLoading ? (
            <div className={classes.spinner}>
              <Spin size="large" />
            </div>
          ) : (
            <div>
              <List
                itemLayout="horizontal"
                dataSource={posts}
                renderItem={item => (
                  <List.Item
                    key={item.Id}
                    actions={[
                      <Link to={`/posts/${item.id}?edit=true`}>edit</Link>
                    ]}
                  >
                    <List.Item.Meta
                      className={classes.listEntryContainer}
                      title={
                        <Link to={`/posts/${item.id}`}>
                          <span className={classes.title}>
                            {item.title} &nbsp;
                          </span>
                          <span className={classes.subtitle}>
                            post #{item.id}
                          </span>
                        </Link>
                      }
                      description={
                        <div className={classes.description}>{item.body}</div>
                      }
                    />
                  </List.Item>
                )}
              />
            </div>
          )}
        </div>
      </Content>
    </QueueAnim>
  );
};

export default withStyles(styles)(PostList);
