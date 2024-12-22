import React from "react";
import { useTypewriter, cursor } from "react-simple-typewriter";
import "./About.css";
import img2 from "./chill.png";

function About() {
  const [typeEffect] = useTypewriter({
    words: [
      "Welcome to my About page",
      "It is under Maintenance",
    ],
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
        <div class="img2">
          <img src={img2}></img>
        </div>
        <div class="about">
        The page is under Maintenance........

        </div>
      </div>
    </>
  );
}

export default About;
