"use client";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import Bag from "@/app/assets/bag.png";
import styled from "styled-components";
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { useState } from "react";
import Modal from "@/app/Auth/Modal";

const Navbars = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("login"); // State to track active tab

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Div>
      <div className="main-container">
        <Image src={Logo} width={171} height={41} alt="logo" />

        <ul className="menu-list">
          <li className="lists">Home</li>
          <li className="lists">SHOP</li>
          <li className="lists">ELEMENTS</li>
          <li className="lists">BLOG</li>
          <li className="lists">PAGES</li>
          <li className="lists">BUY PANDAI</li>
        </ul>

        <div className="icons">
          <CiSearch className="icon" />
          <CiUser className="icon" onClick={openModal} />
          <CiHeart className="icon" />
          <Image
            src={Bag}
            width={20}
            height={20}
            quality={100}
            alt="shop"
            className="icon"
          />
        </div>
      </div>

      <Modal show={showModal} onClose={closeModal}>
        {/* Tab Buttons */}
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === "login" ? "active" : ""}`}
            onClick={() => switchTab("login")}
          >
            Login
          </button>
          <button
            className={`tab-button ${activeTab === "register" ? "active" : ""}`}
            onClick={() => switchTab("register")}
          >
            Register
          </button>
        </div>

        {/* Conditionally Rendered Content */}
        {activeTab === "login" ? (
          <div className="login-form">
            {/* Your login form content */}
            <input type="email" placeholder="Username or email address" />
            <input type="password" placeholder="Password" />
            <button className="submit-btn">Login</button>
          </div>
        ) : (
          <div className="register-form">
            {/* Your register form content */}
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="submit-btn">Register</button>
          </div>
        )}
      </Modal>
    </Div>
  );
};

export default Navbars;

const Div = styled.div`
  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    margin-top: 20px;
  }

  .menu-list {
    display: flex;
    gap: 20px;
  }

  .lists {
    font-size: 14px;
    font-family: "josefin sans", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  }

  .lists:hover {
    cursor: pointer;
  }

  .icons {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .icon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .icon:hover {
    color: #ff9c28;
  }

  /* Modal Styles */
  .tab-buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .tab-button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    color: #54524d;
    font-weight: 400;
  }

  .tab-button.active {
    border-bottom: 1px solid #ff9c28;
    color: #54524d;
  }

  .login-form,
  .register-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .submit-btn {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
  }

  input {
    padding: 10px;
    border: 1px solid #777777;
    font-size: 14px;
    font-weight: 300;
  }

  input:active {
    border: 1px solid #777777;
  }
`;
