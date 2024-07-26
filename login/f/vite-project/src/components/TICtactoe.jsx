import React, { useEffect } from "react";
import { useState } from "react";
import "./csss.css";
function TICtactoe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [active, setActive] = useState(true);
  const [winner, setwinner] = useState("");
  const handleclicl = (index) => {
    if (xIsNext == !true) {
      let nwqarr = [...board];
      nwqarr[index] = "X";
      setBoard(nwqarr);
      setXIsNext((prev) => !prev);
    } else {
      let nwqarr = [...board];
      nwqarr[index] = "O";
      setBoard(nwqarr);
      setXIsNext((prev) => !prev);
    }
  };
  const handleactive = active
    ? {
        backgroundColor: "lightblue",
      }
    : {
        backgroundColor: "pink",
      };
  useEffect(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board[a] + "is winner");
        setwinner(board[a]);

        setActive(!active);
        let newboard = Array.from(9).fill(null);
        setTimeout(() => {
          setBoard(newboard);
        }, 1000);
      }
    }
  }, [xIsNext]);
  return (
    <div className="board" style={{ fontSize: "35px", textAlign: "center" }}>
      <div style={handleactive}>
        <div className="row">
          <div
            className="cell top left"
            onClick={() => {
              handleclicl(0);
            }}
          >
            {board[0]}
          </div>
          <div
            className="cell top left"
            onClick={() => {
              handleclicl(1);
            }}
          >
            {board[1]}
          </div>
          <div
            className="cell top right"
            onClick={() => {
              handleclicl(2);
            }}
          >
            {board[2]}
          </div>
        </div>
        <div className="row">
          <div
            className="cell left"
            onClick={() => {
              handleclicl(3);
            }}
          >
            {board[3]}
          </div>
          <div
            className="cell"
            onClick={() => {
              handleclicl(4);
            }}
          >
            {board[4]}
          </div>
          <div
            className="cell right"
            onClick={() => {
              handleclicl(5);
            }}
          >
            {board[5]}
          </div>
        </div>
        <div className="row">
          <div
            className="cell bottom left"
            onClick={() => {
              handleclicl(6);
            }}
          >
            {board[6]}
          </div>
          <div
            className="cell bottom"
            onClick={() => {
              handleclicl(7);
            }}
          >
            {board[7]}
          </div>
          <div
            className="cell bottom right"
            onClick={() => {
              handleclicl(8);
            }}
          >
            {board[8]}
          </div>
        </div>
      </div>
      <h5>Winner is : {winner}</h5>
      {console.log(board)}
    </div>
  );
}

export default TICtactoe;
