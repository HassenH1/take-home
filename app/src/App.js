import React, { useState } from "react";
import "./App.css";
import Board from "./component/Board";

function App() {
  const [board, setBoard] = useState(Array(64).fill(null)); //fill all nine arrays with null

  return (
    <div className="App">
      <Board squares={board} />
    </div>
  );
}

export default App;
