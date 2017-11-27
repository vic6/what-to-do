import React from "react";
import Option from "./Option.jsx";

const Options = props => {
  return (
    <div>
      <div className='widget-header'>
        <h3 className='widget-header__title'>Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove All
        </button>
      </div>
      {props.options.length === 0 && <p>Enter an item to start</p>}
      {props.options.map(item => (
        <Option
          key={item}
          itemText={item}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

export default Options;
