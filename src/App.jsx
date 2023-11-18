import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Profile />
    </div>
  );
}
