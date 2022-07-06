import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "js-cookie";

// component
import Navbar from "../components/Navbar";

// redux
import store from "../redux/store/store";
import { userActionTypes } from "../redux/constants/usersAction.types";
import usersActionCreator from "../redux/actions/usersAction.creator";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.email === "" && this.state.password === "") {
      this.setState({ loginError: "email and password field empty" });
      return;
    }
    if (this.state.email === "") {
      this.setState({ loginError: "email field empty" });
      return;
    }

    if (this.state.password === "") {
      this.setState({ loginError: "password field empty" });
      return;
    }

    var formObject = { email: this.state.email, password: this.state.password };

    store.dispatch(
      usersActionCreator(userActionTypes.LOGIN_SUCCESS, {
        formObject: JSON.stringify(formObject),
      })
    );
  };

  render() {
    if (Cookies.get("isLoggedIn") === "true") {
      this.props.history.push("/");
    }
    return (
      <>
        <Navbar />
        <div className="form-container">
          <h1 className="form-title">User Login Form</h1>
          <p className="error">{this.props.loginError}</p>
          <form
            action=""
            method=""
            name="login"
            encType="application/x-www-form-urlencoded"
            onSubmit={this.login}
          >
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              onChange={this.setEmail}
              value={this.state.email}
            />
            <br />
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              onChange={this.setPassword}
              value={this.state.password}
            />
            <br />
            <input type="submit" className="loginbtn" value="Login" />
            <hr />
            <p>
              don't have an account?
              <a href="/signup">SignUp Here</a>.
            </p>
          </form>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    loginError: state.loginReducer.loginError,
  };
};
export default connect(mapStateToProps)(Login);
