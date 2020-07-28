import React, { useState } from "react";
import Chessboard from "chessboardjsx";
import "./App.css";
import Board from "./component/Board";

function App() {
  const [board, setBoard] = useState(Array(64).fill(null)); //fill all nine arrays with null

  return (
    <div className="App">
      <Chessboard
        width={500}
        position="start"
        pieces={{
          bK: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://lh5.ggpht.com/K3F-iniKTYk-ZZZI6I2UWe64TqBQrjDEtlqTqu87d6xk7rJvX6ZMcXWa1NSRl7TSAw=h300"
            />
          ),
          bB: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://lh5.ggpht.com/K3F-iniKTYk-ZZZI6I2UWe64TqBQrjDEtlqTqu87d6xk7rJvX6ZMcXWa1NSRl7TSAw=h300"
            />
          ),
          bP: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://lh5.ggpht.com/K3F-iniKTYk-ZZZI6I2UWe64TqBQrjDEtlqTqu87d6xk7rJvX6ZMcXWa1NSRl7TSAw=h300"
            />
          ),
          bQ: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://lh5.ggpht.com/K3F-iniKTYk-ZZZI6I2UWe64TqBQrjDEtlqTqu87d6xk7rJvX6ZMcXWa1NSRl7TSAw=h300"
            />
          ),
          bN: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://lh5.ggpht.com/K3F-iniKTYk-ZZZI6I2UWe64TqBQrjDEtlqTqu87d6xk7rJvX6ZMcXWa1NSRl7TSAw=h300"
            />
          ),
          bR: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://lh5.ggpht.com/K3F-iniKTYk-ZZZI6I2UWe64TqBQrjDEtlqTqu87d6xk7rJvX6ZMcXWa1NSRl7TSAw=h300"
            />
          ),
          wK: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://www.clker.com/cliparts/0/w/2/P/D/T/glossy-home-icon-button-hi.png"
            />
          ),
          wB: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://www.clker.com/cliparts/0/w/2/P/D/T/glossy-home-icon-button-hi.png"
            />
          ),
          wN: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://www.clker.com/cliparts/0/w/2/P/D/T/glossy-home-icon-button-hi.png"
            />
          ),
          wP: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://www.clker.com/cliparts/0/w/2/P/D/T/glossy-home-icon-button-hi.png"
            />
          ),
          wQ: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://www.clker.com/cliparts/0/w/2/P/D/T/glossy-home-icon-button-hi.png"
            />
          ),
          wR: ({ squareWidth, isDragging }) => (
            <img
              style={{
                width: isDragging ? squareWidth * 1.75 : squareWidth,
                height: isDragging ? squareWidth * 1.75 : squareWidth,
              }}
              src="https://www.clker.com/cliparts/0/w/2/P/D/T/glossy-home-icon-button-hi.png"
            />
          ),
        }}
        lightSquareStyle={{ backgroundColor: "white" }}
        darkSquareStyle={{ backgroundColor: "black" }}
      />
    </div>
  );
}

export default App;
