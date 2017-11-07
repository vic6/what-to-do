const app = {
  title: "What To Do",
  subtitle: "I eat ice cream more that anything",
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
      <p>{app.options.length}</p>
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
