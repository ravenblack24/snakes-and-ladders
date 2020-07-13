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
      board: [],
      message: '',
      gameOver: false,
    }

    this.createBoard = this.createBoard.bind(this);
    this.play = this.play.bind(this);
    this.roll = this.roll.bind(this);
    this.checkSpace = this.checkSpace.bind(this);
  }

  componentDidMount() {
    const board = [];
    for(var i = 100; i>=1; i--) {
      board.push(this.createBoard(i));
    }

    this.setState({
      board
    })
  }

  createBoard(id) {
    return <Square value={id} key={id} playerOneActive={id===this.state.playerOnePosition? "active": ""}  playerTwoActive={id===this.state.playerTwoPosition? "active": ""}/>
  }

  roll() {
    var die1 = 1+(Math.floor(Math.random() * 6));  
    var die2 = 1+(Math.floor(Math.random() * 6));  

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
    return (actionSquares[playerPosition]) ? playerPosition = actionSquares[playerPosition] : playerPosition;
  }

  updateTurn() {
    return this.setState({
      isPlayerOneTurn: !this.state.isPlayerOneTurn
    });
  }

 
  render() {
    // const board = [];
    // for(var i = 100; i>=1; i--) {
    //   board.push(this.createBoard(i));
    // }

    return (
      <div className="container">
        <div className="board">
          {this.state.board}
        </div>  
        <div className="play">
          <div>
          <h1 >Player One</h1>
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
