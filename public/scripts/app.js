"use strict";

var app = {
  title: "What To Do",
  subtitle: "I eat ice cream more that anything",
  options: ["Paper", "Sauce"]
};

var templete = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle ? app.subtitle : null
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options",
    " "
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Chocotaco"
    ),
    React.createElement(
      "li",
      null,
      "Ninja Turtle pops"
    )
  )
);

var count = 0;
var addOne = function addOne() {
  count += 1;
  renderCounter();
};

var subTwo = function subTwo() {
  count -= 1;
  renderCounter();
};

var reset = function reset() {
  count = 0;
  renderCounter();
};

var renderCounter = function renderCounter() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: subTwo },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "Reset"
    )
  );
  ReactDOM.render(templateTwo, document.getElementById("app"));
};

renderCounter();
