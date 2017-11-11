class WhatToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [""] };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  // Remember to return the value from setState
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
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
    this.setState(prevState => {
      return {
        // concat so we don't alter prev
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    const title = "What should I do?";
    const subTitle = "Let me pick for you.";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>
        What should I do?
      </button>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(item => <Option key={item} itemText={item} />)}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.itemText}</div>;
  }
}

class AddOption extends React.Component {
  //using local addOption,
  constructor() {
    super();
    this.state = { error: undefined };
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    console.log(error);
    event.target.elements.option.value = "";

    this.setState((prevState) => {
      return {error: error};
    });
  }

  render() {
    return (
      <div>
        {(this.state.error) && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          Enter Name:<input autoComplete='off' type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<WhatToDoApp />, document.getElementById("app"));
