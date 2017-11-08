class WhatToDoApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>What to Do?</h1>
        <h2>Let me randomly pick an assignment for you.</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return <button>What should I do?</button>;
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options Component Here</p>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>Option Right here dog</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<WhatToDoApp />, document.getElementById("app"));
