class WhatToDoApp extends React.Component {
  render() {
    const title = "What should I do?";
    const subTitle = "Let me pick for you.";
    let options = ["pie", "paper", "trash"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  handlePick() {
    //let randNum = Math.floor(Math.random() * max);
    console.log("i am ice cream");
  }
  render() {
    return <button onClick={this.handlePick}>What should I do?</button>;
  }
}

class Options extends React.Component {
  removeAll() {
    alert("System Compromised Self Destruct Initiated. Goodbye");
  }
  render() {
    return (
      <div>
        <p>Options Component Here</p>
        {this.props.options.map(item => <Option key={item} itemText={item} />)}
        <button onClick={this.removeAll}>Remove All</button>
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
  handleAddOption(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    if (option) {
      alert(`Your name ${option} has been added to the offenders list`);
      event.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<WhatToDoApp />, document.getElementById("app"));
