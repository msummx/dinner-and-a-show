import React from "react";
import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <div className="home">
      <img src="dinner.jpeg" className="dinner" alt="people laughing at dinner" />
      <br />
      <h1>An eventful night out is at your fingertips. </h1>
      <br />
      <a href="/createplan"><Button variant="light">Get Started</Button></a>
      <br />
    </div>
  );
}

export default App;
