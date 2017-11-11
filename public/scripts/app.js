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

    _this.state = { options: [] };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    return _this;
  }
  // Remember to return the value from setState


  _createClass(WhatToDoApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var max = this.state.options.length;
      var randNum = Math.floor(Math.random() * max);
      alert(this.state.options[randNum]);
    }
    //Don't forget to return state

  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter item to add to list.";
      } else if (this.state.options.includes(option)) {
        return "Item is already in list.";
      }
      this.setState(function (prevState) {
        return {
          // concat so we don't alter prev
          options: prevState.options.concat(option)
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
        React.createElement(RandomChoice, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return WhatToDoApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "h2",
      null,
      props.subTitle
    )
  );
};

var RandomChoice = function RandomChoice(props) {
  return React.createElement(
    "button",
    { disabled: !props.hasOptions, onClick: props.handlePick },
    "What should I do?"
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    props.options.map(function (item) {
      return React.createElement(Option, { key: item, itemText: item });
    })
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.itemText
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  //using local addOption,
  function AddOption() {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this));

    _this2.state = { error: undefined };
    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(event) {
      event.preventDefault();

      var option = event.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      console.log(error);
      event.target.elements.option.value = "";

      this.setState(function (prevState) {
        return { error: error };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          "Enter Name:",
          React.createElement("input", { autoComplete: "off", type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(WhatToDoApp, null), document.getElementById("app"));
