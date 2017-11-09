"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WhatToDoApp = function (_React$Component) {
  _inherits(WhatToDoApp, _React$Component);

  function WhatToDoApp(props) {
    _classCallCheck(this, WhatToDoApp);

    var _this = _possibleConstructorReturn(this, (WhatToDoApp.__proto__ || Object.getPrototypeOf(WhatToDoApp)).call(this, props));

    _this.state = { options: ["Ice cream", "sandwitches", "prayleans"] };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    return _this;
  }
  // Remember to return the value from setState


  _createClass(WhatToDoApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      console.log("sup dog");
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "What should I do?";
      var subTitle = "Let me pick for you.";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subTitle: subTitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0 }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return WhatToDoApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h2",
          null,
          this.props.subTitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));
  }

  _createClass(Action, [{
    key: "handlePick",
    value: function handlePick() {
      //let randNum = Math.floor(Math.random() * max);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "button",
        { disabled: !this.props.hasOptions, onClick: this.handlePick },
        "What should I do?"
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Options Component Here"
        ),
        this.props.options.map(function (item) {
          return React.createElement(Option, { key: item, itemText: item });
        }),
        React.createElement(
          "button",
          { onClick: this.props.handleDeleteOptions },
          "Remove All"
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.itemText
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(event) {
      event.preventDefault();
      var option = event.target.elements.option.value.trim();
      if (option) {
        alert("Your name " + option + " has been added to the offenders list");
        event.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleAddOption },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          "Add Option"
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(WhatToDoApp, null), document.getElementById("app"));
