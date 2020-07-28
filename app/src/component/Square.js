import React from "react";

const style = {
  background: "white",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

function Square({ onClick, value, num }) {
  return (
    <button
      style={
        (num % 3) - 1 === 0 ? { background: "black" } : { background: "white" }
      }
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
