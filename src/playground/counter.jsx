const count = 0;
const addOne = () => {
  count += 1;
  renderCounter();
};

const subTwo = () => {
  count -= 1;
  renderCounter();
};

const reset = () => {
  count = 0;
  renderCounter();
};

const renderCounter = function() {
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
