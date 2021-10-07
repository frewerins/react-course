import React from "react";
import './Clock.css';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: Number(props.initialState)
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({currentState: this.state.currentState + 1})
    }, 1000);
    setTimeout(() => {clearInterval(this.timer)}, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="clock"> 
        <h2>This is the {this.props.name} counter! </h2>
        <h1> {this.state.currentState} </h1>
      </div>
    )
  }
}
