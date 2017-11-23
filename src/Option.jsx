import React from "react";

const Option = props => {
  return (
    <div>
      {props.itemText}
      <button
        onClick={event => {
          props.handleDeleteOption(props.itemText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
