import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RelatedLinks extends Component {
  render() {
    return (
      <aside className="side-bar">
        <h2>Related Links</h2>
        <div className="related-link-container">
          {this.props.blog.links.map((link, index) => {
            return (
              <div
                className="related-link"
                onClick={this.props.renderNewBlog}
                id={link.blogID}
                key={link.blogID + index}
              >
                <img
                  src="https://github.com/ialtafshaikh/static-files/raw/master/dummp-image.jpg"
                  alt=""
                />
                <p className="link-title">{link.blogID}</p>
              </div>
            );
          })}
        </div>
      </aside>
    );
  }
}

export default withRouter(RelatedLinks);
