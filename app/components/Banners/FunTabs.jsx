import { useState } from "react";
import styled from "styled-components";

const Tabs = () => {
  // State to keep track of active tab
  const [activeTab, setActiveTab] = useState("Tab1");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Div>
      <h2 className="online">FROM ONLINE STORE</h2>

      {/* Tab navigation */}
      <div className="tab-nav">
        <button2w
          className={activeTab === "Tab1" ? "active" : ""}
          onClick={() => handleTabClick("Tab1")}
        >
          Tab 1
        </button2w>
        <button
          className={activeTab === "Tab2" ? "active" : ""}
          onClick={() => handleTabClick("Tab2")}
        >
          Tab 2
        </button>
        <button
          className={activeTab === "Tab3" ? "active" : ""}
          onClick={() => handleTabClick("Tab3")}
        >
          Tab 3
        </button>
      </div>

      {/* Content for each tab */}
      <div className="tab-content">
        {activeTab === "Tab1" && <div>This is content for Tab 1</div>}
        {activeTab === "Tab2" && <div>This is content for Tab 2</div>}
        {activeTab === "Tab3" && <div>This is content for Tab 3</div>}
      </div>
    </Div>
  );
};

export default Tabs;

const Div = styled.div`
  width: 60%;
  margin: 0 auto;

  .tab-nav {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  .tab-nav button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  .tab-nav button.active {
    background-color: #0070f3;
    color: white;
  }
  .tab-content {
    border: 1px solid #eaeaea;
    padding: 20px;
    background-color: #f9f9f9;
  }

  .online {
    font-size: 18px;
    font-family: "josefin sans", sans-serif;
    letter-spacing: 3px;
    background: linear-gradient(to top, #ff9c28, #ffffff, #ffffff);
    width: 256px;
    text-transform: uppercase;
    font-weight: 400;
    text-align: center;
    margin: 20px auto;
  }
`;
