import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// redux
import store from "../redux/store/store";
import { userActionTypes } from "../redux/constants/usersAction.types";
import usersActionCreator from "../redux/actions/usersAction.creator";

// style
import navStyles from "../styles/Nav.module.css";

function Navbar(props) {
  const [toggle, setToggle] = useState(false);

  const toogleClassObj = { display: "block" };

  const navigate = (event) => {
    const route = event.target.getAttribute("data-link");
    props.history.push(route);
  };

  const logout = (event) => {
    store.dispatch(usersActionCreator(userActionTypes.LOGOUT));
    props.history.push("/login");
  };

  const toggleHam = (event) => {
    setToggle(!toggle);
  };
  return (
    <header>
      <nav className="navigation" style={toggle ? toogleClassObj : {}}>
        <div className="logo-container">
          <img
            data-link="/"
            onClick={navigate}
            className="logo"
            src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/bltc1a71705f49d391d/5de663548d1dce6ad6bed8bf/header-logo.svg?format=pjpg&width=220"
            alt="company logo"
          />
        </div>
        <div className="navigation-container">
          <ul style={toggle ? toogleClassObj : {}}>
            <li
              className="nav-item active"
              style={toggle ? toogleClassObj : {}}
            >
              <a className="nav-link" data-link="/" onClick={navigate}>
                Home
              </a>
            </li>
            {props.isLoggedIn ? (
              <>
                <li className="nav-item" style={toggle ? toogleClassObj : {}}>
                  <a className="nav-link" data-link="/" onClick={navigate}>
                    Blogs
                  </a>
                </li>
                <li className="nav-item" style={toggle ? toogleClassObj : {}}>
                  <a
                    className="nav-link"
                    data-link="/create"
                    onClick={navigate}
                  >
                    Create Blog{" "}
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={logout}
                  style={toggle ? toogleClassObj : {}}
                >
                  <a className="nav-link" id="logout">
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </a>
                </li>
              </>
            ) : (
              <li></li>
            )}
          </ul>

          <div id="ham" className={navStyles.hamburger} onClick={toggleHam}>
            <i className="fa fa-bars fa-2x" style={{ color: "white" }}></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(withRouter(Navbar));
