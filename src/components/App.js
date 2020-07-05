import React from 'react';
import Square from './Square';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.createBoard = this.createBoard.bind(this);
  }

  createBoard(id) {
    return <Square value={id} key={id}/>
  }

  render() {
    const board = [];
    for(var i = 100; i>=1; i--) {
      board.push(this.createBoard(i));
    }

    return (
      <div class="board">
        {board}
      </div>
        
    );
  }
}

export default App;
