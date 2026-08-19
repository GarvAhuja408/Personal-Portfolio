import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogsCards from "./BlogsCards";

import wanderlustImg from "../../Assets/wanderlust.png";

function Blogs() {
  return (
    <Container>
      <h1 className="project-heading">
        My <strong className="purple">Projects</strong>
      </h1>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <BlogsCards
            imgPath={wanderlustImg}
            title="Wanderlust"
            site="Full Stack Web Application"
            link="YOUR_GITHUB_REPO_LINK"
          />
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <BlogsCards
            imgPath={wanderlustImg}
            title="Wanderlust"
            site="Full Stack Web Application"
            link="YOUR_GITHUB_REPO_LINK"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Blogs;