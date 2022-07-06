import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import BlogDetail from "../pages/BlogDetail";
import CreateBlog from "../pages/CreateBlog";
import Login from "../pages/Login";

//components
import Footer from "../components/Footer";

//sass
import "../sass/style.scss";

//css
import "../styles/form.css";
import "../styles/home.css";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog/:id" exact component={BlogDetail} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/create" exact component={CreateBlog} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
