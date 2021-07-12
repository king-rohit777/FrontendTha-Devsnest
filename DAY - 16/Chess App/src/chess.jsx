import React from 'react';
import "./chess.css";

function Chess() {
  let boxes = [];
  for (let i = 0; i < 9; i++) {
    boxes.push(<div className='square'/>);
  }

    return (
        <div className="Chess_container">
            <div className="Chess_border">
                <div className="board">
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                    <div className="row">{boxes}</div>
                </div>
            </div>
        </div>
    )
}

export default Chess;