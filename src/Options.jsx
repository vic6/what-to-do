import React from "react";
import Option from './Option.jsx';

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
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
