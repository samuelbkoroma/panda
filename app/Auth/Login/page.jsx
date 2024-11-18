"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal";

const LoginAuth = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Div>
      <button onClick={openModal}>Open Modal</button>

      <Modal show={showModal} onClose={closeModal}>
        <h1>Login Form</h1>
      </Modal>
    </Div>
  );
};

export default LoginAuth;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;
