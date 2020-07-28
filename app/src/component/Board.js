import React from "react";
import "../App.css";
import Square from "./Square";

const style = {
  border: "4px solid darkblue",
  borderRadius: "10px",
  width: "950px",
  height: "850px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(8, 1fr) / repeat(8, 1fr)",
};

const Board = ({ squares }) => (
  <div style={style}>
    {squares.map((square, i) => {
      return <Square key={i} value={square} num={i} />;
    })}
  </div>
);

export default Board;
