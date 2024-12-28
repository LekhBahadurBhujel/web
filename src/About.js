import React from "react";
import { useTypewriter} from "react-simple-typewriter";
import "./About.css";
import img2 from "./chill.png";

function About() {
  const [typeEffect] = useTypewriter({
    words: ["Welcome to my About page", "It is under Maintenance"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  return (
    <>
      <div class="container">
        <div className="text" class="text">
          <h1>
            {" "}
            <span>{typeEffect}</span>
          </h1>
        </div>
        <div class="new-container">
          <div class="img2">
            <img src={img2} alt="img"></img>
          </div>
          <div class="about-container">
            <div class="about">
              <h1 class="Abt"><strong>About Us</strong></h1>
              <p>
                Welcome to <strong>Lekh Web Design</strong>, where innovation meets
                excellence. Founded in <strong>2024</strong>, we are a leading
                technology solutions provider dedicated to transforming businesses
                through cutting-edge technology and unparalleled service. Our
                mission is to empower organizations with innovative solutions that
                drive efficiency, enhance productivity, and foster growth. We
                believe in the power of technology to change the world, and we are
                committed to making that change a reality for our clients.
              </p>
            </div>
            <div class="about">
              <h1 class="Val"><strong>Our Values</strong></h1>
              <p>
                <strong>Innovation:</strong> We constantly seek new and creative
                ways to solve problems and deliver value. <br />
                <strong>Integrity:</strong> We uphold the highest standards of
                integrity in all our actions. <br />
                <strong>Customer Focus:</strong> Our customers are at the heart of
                everything we do. We strive to exceed their expectations in every
                project.
                <br />
                <strong>Excellence:</strong> We are committed to excellence in every
                aspect of our work, from the solutions we provide to the service we
                deliver.
                <br />
              </p>
            </div>
            <div class="about">
              <h1 class="Val"><strong>Our Services</strong></h1>
              <p>
                <strong>Custom Software Development:</strong> Tailored solutions to meet your unique
                business needs. <br />
                <strong>IT Consulting:</strong> Strategic guidance to help you
                navigate the complex world of technology. <br />
                <strong>Cloud Solutions:</strong> Scalable
                and secure cloud services to support your business growth. <br />
                <strong>Cybersecurity:</strong> Comprehensive security solutions to protect your data
                and systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
