import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";

import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
            title="Infra managed service Associate"
            date="2023 - 2025"
            content={[
              "Developed and maintained responsive frontend applications using React.js, JavaScript, HTML, and CSS.",
              "Built reusable React components and integrated REST APIs to deliver interactive and user-friendly web applications.",
              "Worked on an internal enterprise application used by 200+ employees, focusing on performance, usability, and responsive design.",
            ]}
          />
            
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Master of Computer Applications"
              date="2025 - 2027"
              content={[
                `CGPA: 8.57/10 `,
                "Pursuing a Master's degree with a focus on software development, data structures, databases, and modern web technologies.",
              ]}
            />

            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Strong interest in competitive programming and mathematical problem-solving.",
                `2nd rank in college coding competition.`,
              ]}
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Resume;
