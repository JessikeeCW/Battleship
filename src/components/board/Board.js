import React from 'react'
import Row from './Row'
const Board = ({ onClick }) => {
  //creates an empty array and pushes in 10 rows
  let initialBoard = [];
  for (let i = 0; i < 10; i++) {
    initialBoard.push(<Row key={i} number={i} onClick={onClick} />)
  }
  return (
    <div className="board">
      {initialBoard}
    </div>
  );
}

export default Board;
