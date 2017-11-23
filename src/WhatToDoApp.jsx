import React from "react";
import Header from "./Header.jsx";
import RandomChoice from "./RandomChoice.jsx";
import Options from "./Options.jsx";
import AddOption from "./AddOption.jsx";

class WhatToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      // only sets state if json is valid
      if (options) this.setState(() => ({ options }));
    } catch (error) {
      // Don nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // won't rerender if options length hasn't changed
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("Saving Data");
    }
  }
  // Remember to return the value from setState
  // handleDeleteOptions() {
  //   this.setState(() => {
  //     return {
  //       options: []
  //     };
  //   });
  // }
  // short hand form
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }
  handlePick() {
    let max = this.state.options.length;
    let randNum = Math.floor(Math.random() * max);
    alert(this.state.options[randNum]);
  }
  //Don't forget to return state
  handleAddOption(option) {
    if (!option) {
      return "Enter item to add to list.";
    } else if (this.state.options.includes(option)) {
      return "Item is already in list.";
    }
    this.setState(
      // concat so we don't alter prevState
      prevState => ({ options: prevState.options.concat(option) })
    );
  }

  render() {
    const title = "What should I do?";
    const subTitle = "Let me pick for you.";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <RandomChoice
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default WhatToDoApp;
