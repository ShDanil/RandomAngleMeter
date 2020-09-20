import React, { useState } from "react";
import "./App.css";

function App() {
  const [angle, setAngle] = useState(0);
  const setAngleFunc = () => {
    const result = Math.floor(Math.random() * Math.floor(180));
    return result === 0 ? result + 1 : result;
  };

  if (angle > 0) {
    return (
      <div className="mainContainer">
        <div classname="mainContent">
          <h1>Strike angle is {angle}</h1>
          <button
            className="newAngleButton"
            onClick={() => setAngle(setAngleFunc())}
          >
            New strike!
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="mainContainer">
      <div classname="mainContent">
        <h1>Choose your destiny!</h1>
        <button
          className="newAngleButton"
          onClick={() => setAngle(setAngleFunc())}
        >
          Fisrt strike!
        </button>
      </div>
    </div>
  );
}
export default App;
