import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOptions} /*modal show logic */
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOptions} /*Closes the modal when use hit esc/clicks outside modal */
        closeTimeoutMS={200}
        className="modal"
    >
        <h1 className="modal__title">Selected Option</h1>
        {props.selectedOptions && <p className=""modal__body>{props.selectedOptions}</p>} {/* modal content from state passed as props */}
        <button className="button" onClick={props.handleClearSelectedOptions}>Okay</button> {/* on click modal closes using the props method */}
    </Modal>
)
export default OptionModal;