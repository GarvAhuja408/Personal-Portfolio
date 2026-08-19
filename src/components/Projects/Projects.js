import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ReactGA from "react-ga";

import wanderlust from "../../Assets/Projects/wanderlust.PNG";
import codeReview from "../../Assets/Projects/codeReview.PNG";
import investPro from "../../Assets/Projects/InvestPro.PNG";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlust}
              isBlog={false}
              title="Wanderlust"
              description="A full-stack web application built using Node.js, Express.js, MongoDB, and EJS. It allows users to explore, create, edit, and review property listings with user authentication, image uploads, and server-side validation."
              link="https://github.com/GarvAhuja408/Wanderlust"
              liveLink="https://wanderlust-7gbb.onrender.com/listings"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeReview}
              isBlog={false}
              title="InvestPro"
              description="A full-stack stock trading platform built with React.js, Node.js, Express.js, and MongoDB, featuring JWT-based authentication, portfolio management, holdings and position tracking, order management, and RESTful APIs"
              link="https://github.com/GarvAhuja408/TradePro-A-stock-trading-web-app"
              liveLink="https://zerodha-a-stock-trading-web-app.vercel.app/"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={investPro}
              isBlog={false}
              title="AI Code reviewer"
              description="A full-stack AI-powered web application that analyzes source code and provides automated feedback, suggestions, and improvements. Built using grok API ,with AI integration for intelligent code review"
              link="https://github.com/GarvAhuja408/AI-Code-reviewer"
              liveLink="https://ai-code-reviewer-garv15.vercel.app/"
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;