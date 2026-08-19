import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Resumecontent from "./ResumeContent";


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
              "Managed enterprise SQL environments across 150–200 on-prem servers, 120+ Azure VMs, and 50+ Azure SQL MIs, supporting 600+ databases.",
              "Administered SQL Server Always On Availability Groups (AOAG), including failovers, DR drills, and high-availability configuration.",
              "Executed 40+ database migrations across on-prem, Azure SQL MI, and lift-and-shift environments with production cutovers.",
              "Optimized SQL Server performance through query and index tuning, execution-plan analysis, TEMPDB optimization, and resolving blocking/deadlocks."
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
