import React from 'react';
import Square from './Square';

const Row = ({ number, onClick }) => {
  
  //creates the columns and in each row it will have 10 sqaures
  let column = [];
  for (let i = 0; i < 10; i++) {
    column.push(<Square key={i} row={number} col={i} onClick={onClick} />);
  }
  return <div className="row">{column}</div>;
};

export default Row;
