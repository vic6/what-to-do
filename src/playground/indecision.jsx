const app = {
  title: "What To Do",
  subtitle: "Do know what to do? I'll chose for you!*",
  options: []
};

const onFormSubmit = function(event) {
  event.preventDefault();
  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
    renderForm();
  }
};

const randomOption = function() {
  let max = app.options.length;
  let randNum = Math.floor(Math.random() * max);
  console.log(app.options[randNum]);
};

const clearOptions = function() {
  app.options = [];
  renderForm();
};

const renderForm = function() {
  let template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle ? app.subtitle : null}</p>
      <p>{app.options.length > 0 ? "Here are your options" : "No options"} </p>
      <button disabled={app.options < 1} onClick={randomOption}>
        What should I do?
      </button>
      <button onClick={clearOptions}>Clear Options</button>

      <ol>
        {app.options.map(option => {
          return <li key={option}>{option}</li>;
        })}
      </ol>
      <form autoComplete="off" onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
};

renderForm();
