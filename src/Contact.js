import React from "react";
import { useTypewriter } from "react-simple-typewriter";
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

  const [isLogin, setIsLogin] = React.useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="text">
        <h1>
          <span>{typeEffect}</span>
        </h1>
      </div>
      <div className="content">
        <div className="img3">
          <img src={img3} alt="Car" />
        </div>
        <div className="form-container">
          <div className="form-toggle">
            <button onClick={toggleForm}>
              {isLogin ? "Signup [New User]" : "Login [Already User]"}
            </button>
          </div>
          {isLogin ? (
            <div className="login-form">
              <h2>Login</h2>
              <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Login</button>
              </form>
            </div>
          ) : (
            <div className="signup-form">
              <h2>Signup</h2>
              <form>
                <label htmlFor="new-username">Username</label>
                <input type="text" id="new-username" name="new-username" required />

                <label htmlFor="new-email">Email</label>
                <input type="email" id="new-email" name="new-email" required />

                <label htmlFor="new-password">Password</label>
                <input type="password" id="new-password" name="new-password" required />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required />

                <button type="submit">Signup</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;