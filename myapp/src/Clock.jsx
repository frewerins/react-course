import React from "react";
import './Clock.css';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCounter: props.initialNumberOfCounter,
      numberOfTicks: props.numberOfTicks ?? 10
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({currentCounter: this.state.currentCounter + 1, numberOfTicks: this.state.numberOfTicks - 1});
      if (this.state.numberOfTicks === 0) {
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
