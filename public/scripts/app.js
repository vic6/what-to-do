"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleDetails = function (_React$Component) {
  _inherits(ToggleDetails, _React$Component);

  function ToggleDetails() {
    _classCallCheck(this, ToggleDetails);

    var _this = _possibleConstructorReturn(this, (ToggleDetails.__proto__ || Object.getPrototypeOf(ToggleDetails)).call(this));

    _this.state = { visable: false };
    _this.handleDetailsToggle = _this.handleDetailsToggle.bind(_this);
    return _this;
  }

  _createClass(ToggleDetails, [{
    key: "handleDetailsToggle",
    value: function handleDetailsToggle() {
      console.log(this.state.visable);
      this.setState(function (prevState) {
        return {
          visable: !prevState.visable
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Toggle Me"
        ),
        React.createElement(
          "button",
          { onClick: this.handleDetailsToggle },
          this.state.visable ? "Hide Details" : "Show Details"
        ),
        this.state.visable && React.createElement(
          "p",
          null,
          "I love ice cream"
        )
      );
    }
  }]);

  return ToggleDetails;
}(React.Component);

ReactDOM.render(React.createElement(ToggleDetails, null), document.getElementById("app"));
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
