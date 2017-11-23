import React from 'react';

const RandomChoice = props => {
  return (
    <button disabled={!props.hasOptions} onClick={props.handlePick}>
      What should I do?
    </button>
  );
};

export default RandomChoice;
