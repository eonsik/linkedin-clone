import React from "react";
import Header from "./Header";
import "./App.css";
import LeftSidebar from "./LeftSidebar";

function App() {
  return (
    <div className="app">
      <div>
        {/* Header */}
        <Header />
        {/* Main Body */}
        <div className="app__body">
          <LeftSidebar />
        </div>
        {/* Left Sidebar */}
        {/* Right Sidebar */}
      </div>
    </div>
  );
}

export default App;
