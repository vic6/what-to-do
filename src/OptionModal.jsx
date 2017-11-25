import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.clearModal}
    >
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.clearModal}>Okay</button>
  </Modal>
);

export default OptionModal;
