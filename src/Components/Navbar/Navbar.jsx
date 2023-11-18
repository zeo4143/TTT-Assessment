import React from 'react'
import logo from "../../assets/ttt.jpg"
import Styles from "./Navbar.module.css"

export default function () {
  return (
    <div className={Styles.container}>
        <div className={Styles.logo}>
            <img src={logo} alt="" className={Styles.img}/>
            <h1 className={Styles.title}>STORIES</h1>
        </div>
        <div className={Styles.components}>
            <button className={Styles.navButton}>
                Courses
            </button>
        </div>
    </div>
  )
}
