class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    try{
      const json = localStorage.getItem("count");
      const jsonObj = JSON.parse(json);
      if (jsonObj) this.setState(() => ({count: jsonObj}));

    } catch(error) {
      // Do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const jsonString = JSON.stringify(this.state.count);
    localStorage.setItem("count", jsonString);
  }
  handleAddOne() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  handleSubtractOne() {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }
  handleSubtractOne() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }
  // handleReset() {
  //   this.setState(() => ({
  //     count: 0
  //   }));
  // }
  //short hand
  handleReset() {
    this.setState(() => ({ count: 0 }));
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.handleAddOne}>Add One</button>
        <button onClick={this.handleSubtractOne}>Subtract One</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter />, document.getElementById("app"));

// const count = 0;
// const addOne = () => {
//   count += 1;
//   renderCounter();
// };
//
// const subTwo = () => {
//   count -= 1;
//   renderCounter();
// };
//
// const reset = () => {
//   count = 0;
//   renderCounter();
// };
//
// const renderCounter = function() {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={subTwo}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, document.getElementById("app"));
// };
//
// renderCounter();
