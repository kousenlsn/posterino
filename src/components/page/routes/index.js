import React from "react";
import { Route, Switch } from "react-router-dom";

import PostList from "../../posts/postList/postList";
import PostEntry from "../../posts/postEntry/postEntry";

import InvalidRoute from "./invalidRoute";

export default (
  <Switch>
    <Route exact path="/" component={PostList} />
    <Route exact path="/:postId" component={PostEntry} />

    <Route component={InvalidRoute} />
  </Switch>
);
