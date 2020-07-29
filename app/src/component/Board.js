import React, { useState } from "react";
import "../App.css";

const Board = () => {
  const [square, setSquare] = useState([]);
  const [red, setRed] = useState([]);
  let color = 0;

  for (let i = 0; i < 64; i++) {
    if (i % 16 === 0) {
      square.push(<div className="square-black"></div>);
      color = 0;
    } else if (i % 8 === 0) {
      square.push(<div className="square-white"></div>);
      color = 1;
    } else if (color === 1) {
      square.push(<div className="square-black"></div>);
      color = 0;
    } else {
      square.push(<div className="square-white"></div>);
      color = 1;
    }
  }

  return (
    <>
      <div className="board">
        {square}
        <div>{red}</div>
      </div>
    </>
  );
};

export default Board;
