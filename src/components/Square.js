import React from 'react';

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneActive: this.props.playerOneActive,
      playerTwoActive: this.props.playerTwoActive
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.playerOneActive !== prevProps.playerOneActive ) {
      this.setState({ playerOneActive: this.props.playerOneActive});
    }
    if(this.props.playerTwoActive !== prevProps.playerTwoActive ) {
      this.setState({ playerTwoActive: this.props.playerTwoActive});
    }
  }

  render() {
      return (
        <div className="square" data-playerOneActive={this.state.playerOneActive} data-playerTwoActive={this.state.playerTwoActive}>
          {this.props.value} 
        </div>
      )
    }
  }