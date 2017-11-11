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

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  );
};

const RandomChoice = props => {
  return (
    <button disabled={!props.hasOptions} onClick={props.handlePick}>
      What should I do?
    </button>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Enter an item to start</p>}
      {props.options.map(item => (
        <Option
          key={item}
          itemText={item}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.itemText}
      <button
        onClick={event => {
          props.handleDeleteOption(props.itemText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

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
    this.setState(prevState => ({ error }));
    if (!error) {
      event.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          Enter Name:<input autoComplete="off" type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<WhatToDoApp />, document.getElementById("app"));
