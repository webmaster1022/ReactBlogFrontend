import React from "react";

export default function Footer() {
  return (
    <footer>
      <p className="copy">
        &copy; 2020 All Rights Reserved by <span>Altaf Shaikh</span>
      </p>
      <div className="social-links">
        <a
          href="https://mobile.twitter.com/ialtafshaikh"
          className="fa fa-twitter twitter"
        >
          {" "}
        </a>
        <a
          href="https://www.linkedin.com/in/ialtafshaikh/"
          className="fa fa-linkedin linkedin"
        >
          {" "}
        </a>
        <a
          href="https://www.instagram.com/ialtafshaikh"
          className="fa fa-facebook facebook"
        >
          {" "}
        </a>
        <a
          href="https://github.com/altafshaikh"
          className="fa fa-github github"
        >
          {" "}
        </a>
      </div>
    </footer>
  );
}
