import React from 'react';
import Square from './Square';
import '../App.css';

const actionSquares = {
  2: 38, // ladder
  7: 14, // ladder
  8: 31, // ladder
  15: 26, // ladder
  16: 6, // snake
  21: 42, // ladder
  28: 84, // ladder
  36: 44, // ladder
  46: 25, // snake
  49: 11, // snake
  51: 67, // ladder
  62: 19, // snake
  64: 60, // snake
  74: 53, // snake
  89: 68, // snake
  92: 88, // snake
  95: 75, // snake
  99: 80, // snake
  71: 91, // ladder
  78: 98, // ladder
  87: 94, // ladder
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOnePosition: 0,
      playerTwoPosition: 0,
      isPlayerOneTurn: true,
      message: '',
      gameOver: false,
      diceRoll: []
    }

    this.createBoard = this.createBoard.bind(this);
    this.play = this.play.bind(this);
    this.roll = this.roll.bind(this);
    this.checkSpace = this.checkSpace.bind(this);
  }

  createBoard(id) {
    return <Square value={id} key={id} playerOneActive={id===this.state.playerOnePosition? "active": ""}  playerTwoActive={id===this.state.playerTwoPosition? "active": ""}/>
  }

  roll() {
    var die1 = 1+(Math.floor(Math.random() * 6));  
    var die2 = 1+(Math.floor(Math.random() * 6));  
    this.setState({
        diceRoll: [die1, die2]
    }); 

    this.play(die1, die2);
  }

  play(die1, die2) {
    if(this.state.playerOnePosition === 100 || this.state.playerTwoPosition === 100) {
      this.setState({message: "Game over!"});
    }

    var playerPosition = (this.state.isPlayerOneTurn) ? this.state.playerOnePosition : this.state.playerTwoPosition;

    let move = this.move(playerPosition, die1 + die2, this.state.isPlayerOneTurn);
  
    if(move === 100) {
        this.setState({message: `Player x Wins!`}); 
    }
  
    if(die1 !== die2) {
        this.updateTurn();
    }  

    return this.setState({message: "Player " + (this.state.isPlayerOneTurn ? "1" : "2") + " is on square "+ move});
  
  }

  move(playerPosition, moveTotal, isPlayerOneTurn) {
    let move = playerPosition+moveTotal;
    let position;
      
    if(playerPosition+moveTotal <= 100) {
        position = this.checkSpace(move);
    } else {
        position = this.checkSpace(100-(move-100));
    }
    
    if(isPlayerOneTurn) {
      this.setState({
        playerOnePosition: position
      });
    } else {
      this.setState({
        playerTwoPosition: position
      });
    }
    return position;
  }

  checkSpace(playerPosition) {
    // return (actionSquares[playerPosition]) ? playerPosition = actionSquares[playerPosition] : playerPosition;

    if(actionSquares[playerPosition]) {
      console.log("action space"); 
      return playerPosition = actionSquares[playerPosition]
    }
    return playerPosition;
     
  }

  updateTurn() {
    return this.setState({
      isPlayerOneTurn: !this.state.isPlayerOneTurn
    });
  }
 
  render() {
    const board = [];

    for(let i = 100; i>=91; i--) {
      board.push(this.createBoard(i));
    }
    for(let i = 81; i<=90; i++) {
      board.push(this.createBoard(i));
    }
    for(let i = 80; i>=71; i--) {
      board.push(this.createBoard(i));
    }
    for(let i = 61; i<=70; i++) {
      board.push(this.createBoard(i));
    }
    for(let i = 60; i>=51; i--) {
      board.push(this.createBoard(i));
    }
    for(let i = 41; i<=50; i++) {
      board.push(this.createBoard(i));
    }
    for(let i = 40; i>=31; i--) {
      board.push(this.createBoard(i));
    }
    for(let i = 21; i<=30; i++) {
      board.push(this.createBoard(i));
    }
    for(let i = 20; i>=11; i--) {
      board.push(this.createBoard(i));
    }
    for(let i = 1; i<=10; i++) {
      board.push(this.createBoard(i));
    }

    return (
      <div className="container">
        <div className="board">
          {board}
        </div>  
        <div className="play">
          <div>
          <h1>Player One</h1>
            <button onClick={this.roll}>Roll</button>
            <p> You rolled: {this.state.diceRoll}</p>
            Board Position: {this.state.playerOnePosition}
          </div>
          <div>
            <h1>Player Two</h1>
            <button onClick={this.roll}>Roll</button>
            <p>You rolled: {this.state.diceRoll}</p>
            Board Position: {this.state.playerTwoPosition}
          </div>
          <h1>Messages</h1>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default App;