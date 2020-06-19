import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import BaseLayout from "./layouts/BaseLayout/BaseLayout";

import UsersPage from "../src/pages/UsersPage/UsersPage";
import HomePage from "../src/pages/HomePage/HomePage";
import ProfilePage from "../src/pages/ProfilePage/ProfilePage";
import TodosPage from "./pages/TodosPage/TodosPage";
import PostsPage from "./pages/PostsPage/PostsPage";

class App extends Component {

  render(){
    return (
      <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={UsersPage} />
          <Route path="/users/:id/posts" component={PostsPage} />
          <Route path="/users/:id/todos" component={TodosPage} />
          <Route path="/users/:id" component={ProfilePage} />
        </Switch>
      </BaseLayout>
      </Router>
      );
  }
}

export default App;
