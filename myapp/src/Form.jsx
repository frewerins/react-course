import React from "react";
import {FormInput} from "./FormInput";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = (value) => { this.setState({name: value}); }
    this.handleMailChange = (value) => { this.setState({mail: value}); }
    this.handleOnClickButton = () => { this.setState({hideData: false}) };
    this.state = {name: '', mail: '', hideData: true};
  }

  render() {
    return (
      <div>
        <FormInput
          value={this.state.name}
          onInputChange={this.handleNameChange} legend='Ваше имя'/>
        <FormInput
          value={this.state.mail}
          onInputChange={this.handleMailChange} legend='Контакт для связи'/>
          <button onClick={this.handleOnClickButton}>Показать введенные данные</button>
          <p hidden={this.state.hideData}>Ваше имя: {this.state.name}</p>
          <p hidden={this.state.hideData}>Ваш контакт для связи: {this.state.mail}</p>
      </div>
    );
  }
}
