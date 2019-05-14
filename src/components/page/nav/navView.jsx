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
          <Col className={classes.flex}>
            <Avatar
              className={classes.icon}
              src="https://icon2.kisspng.com/20180720/jaa/kisspng-text-naruto-sticker-logo-idcard-5b51c236763454.8572265815320847904842.jpg"
            />
            <div>Posterino</div>
          </Col>
          <Col className={classes.flexRight}>
            <Button
              className={classes.button}
              disabled={isLoading}
              onClick={resetData}
            >
              Default data
            </Button>
          </Col>
        </Row>
      </Layout.Header>
    </QueueAnim>
  );
};

export default withStyles(styles)(Nav);
