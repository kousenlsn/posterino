import React from "react";
import withStyles from "react-jss";
import { Layout, Row, Col, Avatar, Button } from "antd";
import QueueAnim from "rc-queue-anim";

import styles from "./navStyles";

const Nav = ({ resetData, isLoading, classes }) => {
  return (
    <QueueAnim delay={50} duration={[500, 0]} type="top">
      <Layout.Header className={classes.container} key="navbar">
        <Row
          type="flex"
          align="middle"
          justify="start"
          gutter={16}
          style={{ height: "100%" }}
        >
          <Col>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            Testerino
          </Col>
          <Col>
            <Button disabled={isLoading} onClick={resetData}>
              should be to the right
            </Button>
          </Col>
        </Row>
      </Layout.Header>
    </QueueAnim>
  );
};

export default withStyles(styles)(Nav);
