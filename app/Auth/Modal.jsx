"use client";

import React from "react";
import styled from "styled-components";

const Modal = ({ show, onClose, children }) => {
  return (
    <>
      <Overlay show={show} onClick={onClose} />
      <ModalContainer show={show}>
        <div className="modal-content">
          {/* <button className="close-btn" onClick={onClose}>
            Close
          </button> */}
          {children}
        </div>
      </ModalContainer>
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 999; /* Ensures it's above other content */
  display: ${({ show }) =>
    show ? "block" : "none"}; /* Show only when modal is open */
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background: white;
  padding: 30px;
  z-index: 1000; /* Ensures it's above the overlay */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  transform: ${({ show }) =>
    show ? "translateX(0)" : "translateX(100%)"}; /* Moves modal off-screen */
  transition: transform 0.5s ease; /* Smooth transition for sliding effect */

  .modal-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .close-btn {
    align-self: flex-end;
    background-color: #333;
    color: white;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
  }
`;
