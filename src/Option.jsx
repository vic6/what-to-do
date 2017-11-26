import React from "react";

const Option = props => (
  <div>
    {props.itemText}
    <button
      className='button'
      onClick={event => {
        props.handleDeleteOption(props.itemText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
