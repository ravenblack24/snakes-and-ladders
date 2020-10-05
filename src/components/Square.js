import React from 'react';
import Counter from './Counter';

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
        <div className="square">
          <div className={'number number-'+this.props.value} ></div>
          {this.state.playerOneActive && (
            <Counter player="O" />
          ) }
          {this.state.playerTwoActive && (
            <Counter player="X" />
          ) }
        </div>
      )
    }
  }