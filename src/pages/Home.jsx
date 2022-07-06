import React, { Component } from "react";
import Cookies from "js-cookie";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

// components
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";

// redux
import store from "../redux/store/store";
import { userActionTypes } from "../redux/constants/usersAction.types";
import usersActionCreator from "../redux/actions/usersAction.creator";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      loading: false,
    };
  }
  componentDidMount = () => {
    if (
      typeof Cookies.get("isLoggedIn") === "undefined" &&
      typeof Cookies.get("jwt") === "undefined"
    ) {
      this.props.history.push("/login");
    }
    store.dispatch(usersActionCreator(userActionTypes.AUTHORIZED));
  };

  render() {
    if (Cookies.get("isLoggedIn") === "false" && !this.props.isLoggedIn) {
      this.props.history.push("/login");
    }
    return (
      <div>
        {this.state.loading ? (
          <>
            <Navbar />
            <div>Loading..</div>
          </>
        ) : (
          <>
            <Navbar />
            <div className="body-container">
              {this.props.blogs.map((blog, index) => {
                return index % 4 === 0 ? (
                  <Row key={index}>
                    {this.props.blogs.slice(index, index + 4).map((blog) => {
                      return (
                        <Col className="py-2" key={blog.blogID}>
                          <BlogCard blog={blog} />;
                        </Col>
                      );
                    })}
                  </Row>
                ) : (
                  <></>
                );
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    blogs: state.blogReducer.blogs,
  };
};

export default connect(mapStateToProps)(Home);
