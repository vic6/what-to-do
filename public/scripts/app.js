"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = { count: 0 };
    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleSubtractOne = _this.handleSubtractOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("count");
        var jsonObj = JSON.parse(json);
        if (jsonObj) this.setState(function () {
          return { count: jsonObj };
        });
      } catch (error) {
        // Do nothing
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var jsonString = JSON.stringify(this.state.count);
      localStorage.setItem("count", jsonString);
    }
  }, {
    key: "handleAddOne",
    value: function handleAddOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: "handleSubtractOne",
    value: function handleSubtractOne() {
      this.setState(function (prevState) {
        return { count: prevState.count - 1 };
      });
    }
  }, {
    key: "handleSubtractOne",
    value: function handleSubtractOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
    // handleReset() {
    //   this.setState(() => ({
    //     count: 0
    //   }));
    // }
    //short hand

  }, {
    key: "handleReset",
    value: function handleReset() {
      this.setState(function () {
        return { count: 0 };
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
          "Counter"
        ),
        React.createElement(
          "p",
          null,
          "Current count: ",
          this.state.count
        ),
        React.createElement(
          "button",
          { onClick: this.handleAddOne },
          "Add One"
        ),
        React.createElement(
          "button",
          { onClick: this.handleSubtractOne },
          "Subtract One"
        ),
        React.createElement(
          "button",
          { onClick: this.handleReset },
          "Reset"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));

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
