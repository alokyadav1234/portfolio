import React from "react";
import "./Modal.css";
// import "../Services/Services.css";

const Modal = ({ selectedService, closeModal }) => {
  return (
    <>
      <div className="backdrop" onClick={closeModal} />
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* <button className="close-button" onClick={closeModal}>
            X
          </button> */}
          <fieldset className="services-format2">
            <legend className="services-image">
              <h3>{selectedService.s_no}</h3>
              <h2>{selectedService.s_name}</h2>
            </legend>

            <p>{selectedService.s_desc_2}</p>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Modal;
