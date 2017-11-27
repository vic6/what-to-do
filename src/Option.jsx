import React from "react";

const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.itemText}
    </p>
    <button
      className="button button--link"
      onClick={event => {
        props.handleDeleteOption(props.itemText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
