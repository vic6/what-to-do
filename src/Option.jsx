import React from "react";

const Option = props => (
  <div>
    {props.itemText}
    <button
      className='button button--link'
      onClick={event => {
        props.handleDeleteOption(props.itemText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
