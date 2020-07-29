import React, { useState } from "react";
import "../App.css";

const Board = () => {
  const [square, setSquare] = useState([]);

  for (let i = 0; i < 64; i++) {
    if (i % 2 === 0) {
      square.push(<div className="square-black">{i}</div>);
    } else {
      square.push(<div className="square-white">{i}</div>);
    }
  }

  return <div className="board">{square}</div>;
};

export default Board;
