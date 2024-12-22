import React from "react";
import { useTypewriter, cursor } from "react-simple-typewriter";
import "./Contact.css";
import img3 from "./car.png";

function Contact() {
  const [typeEffect] = useTypewriter({
    words: [
      "Welcome to my Contact page",
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
        <div class="img3">
          <img src={img3}></img>
        </div>
        <div class="contact">
        The page is under Maintenance........

        </div>
      </div>
    </>
  );
}

export default Contact;
