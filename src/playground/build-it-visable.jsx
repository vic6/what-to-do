class ToggleDetails extends React.Component {
  constructor() {
    super();
    this.state = { visable: false };
    this.handleDetailsToggle = this.handleDetailsToggle.bind(this);
  }

  handleDetailsToggle() {
    console.log(this.state.visable);
    this.setState((prevState) => ({
      visable: !prevState.visable
    }));
  }
  render() {
    return (
      <div>
        <h1>Toggle Me</h1>
        <button onClick={this.handleDetailsToggle}>
          {this.state.visable ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visable && <p>I love ice cream</p>}
      </div>
    );
  }
}

ReactDOM.render(<ToggleDetails />, document.getElementById("app"));
// const app = {
//   title: "Toggle Me",
//   details: "Yo dog, whats up",
//   showing: false
// };
//
// const toggleDetails = function() {
//   app.showing ? (app.showing = false) : (app.showing = true);
//   render();
// };
//
// const render = function() {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleDetails}>
//         {app.showing ? "Hide Details" : "Show Details"}
//       </button>
//       {app.showing && <p>{app.details}</p>}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById("app"));
// };
//
// render();
