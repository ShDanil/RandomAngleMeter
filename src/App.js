import React, { useState } from "react";
import "./App.css";

function App() {
  const [angle, setAngle] = useState(0);
  const setAngleFunc = () => {
    const result = Math.floor(Math.random() * Math.floor(180));
    return result === 0 ? result + 1 : result;
  };

  let rotateDegsere = "rotate(" + angle + "deg)";
  let imgStyleAngle = {
    transform: rotateDegsere,
    width: "50%",
    transition: "transform 0.2s ease-in-out",
  };
  if (angle > 0) {
    return (
      <div className="mainContent">
        <h1>Strike angle is {angle}°</h1>
        <div>
          <button
            className="newAngleButton"
            onClick={() => setAngle(setAngleFunc())}
          >
            New strike!
          </button>
        </div>
        <div className="imgDiv">
          <img
            src="https://www.freepngimg.com/thumb/sword/24135-6-katana-transparent.png"
            className="katanaImage"
            alt="katana-img"
            style={imgStyleAngle}
          ></img>
        </div>
      </div>
    );
  }
  return (
    <div className="mainContent">
      <h1>Транспортир Отаке-сенсея</h1>
      <h1>Prepare your anus!</h1>
      <div>
        <button
          className="newAngleButton"
          onClick={() => setAngle(setAngleFunc())}
        >
          First strike!
        </button>
      </div>
      <div className="imgDiv">
        <img
          src="https://www.freepngimg.com/thumb/sword/24135-6-katana-transparent.png"
          className="katanaImage"
          alt="katana-img"
          style={imgStyleAngle}
        ></img>
      </div>
    </div>
  );
}
export default App;
