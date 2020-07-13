import React from 'react';

export default function Square(props) {
    return (
      <div className="square" data-playerOneActive={props.playerOneActive} data-playerTwoActive={props.playerTwoActive}>
         {props.value} 
      </div>
    )
  }