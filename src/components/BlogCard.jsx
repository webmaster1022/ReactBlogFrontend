import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

class BlogCard extends Component {
  blogDetail = (event) => {
    this.props.history.push(`/blog/${event.target.id}`);
  };
  render() {
    const blog = this.props.blog;
    return (
      <>
        <Card key={blog.blogID}>
          <CardBody>
            <CardTitle tag="h5">{blog.title}</CardTitle>
          </CardBody>
          <img width="100%" src={blog.imageUrl} alt={blog.title} />
          <CardBody>
            <CardText>{blog.content.substr(0, 100)}...</CardText>
            <Button onClick={this.blogDetail} id={blog.blogID}>
              Read More
            </Button>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default withRouter(BlogCard);
