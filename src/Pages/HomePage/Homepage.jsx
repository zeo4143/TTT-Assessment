import React from "react";
import Styles from "./Homepage.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Homepage() {
  return (
    <div className={Styles.Container}>
      <Navbar />
      <div className={Styles.Outlet}>
        <Outlet />
      </div>
    </div>
  );
}
