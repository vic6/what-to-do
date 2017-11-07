const app = {
  title: "What To Do",
  subtitle: "I eat ice cream more that anything",
  options: ["Paper", "Sauce"]
};

let templete = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle ? app.subtitle : null}</p>
    <p>{app.options.length > 0 ? "Here are your options" : "No options"} </p>
    <ol>
      <li>Chocotaco</li>
      <li>Ninja Turtle pops</li>
    </ol>
  </div>
);

let count = 0;
let addOne = () => {
  count += 1;
  renderCounter();
};

let subTwo = () => {
  count -= 1;
  renderCounter();
};

let reset = () => {
  count = 0;
  renderCounter();
};

let renderCounter = function() {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subTwo}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, document.getElementById("app"));
};

renderCounter();
