import React from "react";
import './Clock.css';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCounter: props.initialNumberOfCounter
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({currentCounter: this.state.currentCounter + 1});
      if (this.state.currentCounter - this.props.initialNumberOfCounter === 10) {
        clearInterval(this.timer)
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="clock"> 
        <h2>This is the {this.props.name} counter! </h2>
        <h1> {this.state.currentCounter} </h1>
      </div>
    )
  }
}
