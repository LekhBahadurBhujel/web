import React from "react";
import { useTypewriter} from "react-simple-typewriter";
import "./Home.css";
import img from "./rocking.png";

function Home() {
  const [typeEffect] = useTypewriter({
    words: [
      "Welcome to my Home page",
      "This is my Portfolio",
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
        <div class="img">
          <img src={img} alt="img"></img>
        </div>
        
        <div class="intro">
       <p> Hi! I’m Lekh Bahadur Bhujel, a passionate web developer from Nepal. With a strong background in react.js, I thrive on creating innovative solutions that blend creativity with functionality.

In this portfolio, you’ll find a collection of my projects that showcase my ability to develop websites. 

Feel free to explore my work, and let’s connect! </p>
        </div>
      </div>
    </>
  );
}

export default Home;
