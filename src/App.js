import React from "react";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div>
        {/* Header */}
        <Header />
        {/* Main Body */}
        <div className="app__body">
          <Sidebar />
        </div>
        {/* Left Sidebar */}
        {/* Right Sidebar */}
      </div>
    </div>
  );
}

export default App;
