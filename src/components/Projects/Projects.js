import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import signlanguage from "../../Assets/Projects/signlanguage.png";
import context_switching from "../../Assets/Projects/context_switching.png";
import spotify_clone from "../../Assets/Projects/spotify_clone.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify_clone }
              isBlog={false}
              title="Music Player"
              description="The music player project utilizes HTML, CSS, and JavaScript to create an interactive web-based music player, offering users control over playback, volume, and track selection in a visually appealing interface.
              "
              ghLink="https://github.com/Ujjawal-Kantt/Spotify-Clone.github.io"
              demoLink="https://ujjawal-kantt.github.io/Spotify-Clone.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signlanguage}
              isBlog={false}
              title="SignLang"
              description="A sign language project in Java uses computer vision to recognize sign language gestures, improving communication for the hearing impaired.By analyzing the sentences, this Java-based sign language project converts them into understandable text or speech, fostering accessibility and inclusion."
              ghLink="https://github.com/Ujjawal-Kantt/SignLang"
              demoLink="https://github.com/Ujjawal-Kantt/SignLang"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={context_switching}
              isBlog={false}
              title="Context Switching"
              description="The context switching project, exclusively designed for Linux and written in C, optimizes the efficient allocation of CPU resources among processes, enhancing system performance and multitasking capabilities in the Linux environment.
              "
              ghLink=""
              demoLink=""              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
