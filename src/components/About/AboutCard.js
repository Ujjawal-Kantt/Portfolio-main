import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Enthusiasts, I am <span className="purple">Ujjawal Kantt </span>
            from <span className="purple"> Patna, India.</span>
            <br /> I am a second year student pursuing a Bachelor of Technology (B.Tech)
            in Computer science and Engineering at SRMIST.
            <br />
            
            
            <br />
            Certification and Badges I have earned 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hackerrank Gold Badges In  DSA / C / C++ / Python / Java
            </li>
            <li className="about-activity">
              <ImPointRight /> Palto Alto Network Security
            </li>
            <li className="about-activity">
              <ImPointRight /> Ethical Hacking Course
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hustle beats talent when talent doesn't hustle"{" "}
          </p>
          <footer className="blockquote-footer">Ujjawal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
