import React from "react";

export class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    return (
      <div>
        <p>{this.props.legend}</p>
        <input value={this.props.value}
               onChange={this.handleChange} />
      </div>
    );
  }
}
