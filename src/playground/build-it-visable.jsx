const app = {
  title: "Toggle Me",
  details: "Yo dog, whats up",
  showing: false
};

const toggleDetails = function() {
  app.showing ? (app.showing = false) : (app.showing = true);
  render();
};

const render = function() {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleDetails}>
        {app.showing ? "Hide Details" : "Show Details"}
      </button>
      {app.showing && <p>{app.details}</p>}
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
};

render();
