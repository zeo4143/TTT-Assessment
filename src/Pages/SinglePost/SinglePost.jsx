import React from "react";
import Styles from "./SinglePost.module.css";
import defaultAvatar from "../../../public/images/defaultProfile.png";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function PostSingle() {
  const location = useLocation();
  const { data } = location.state;

  console.log(data);

  return (
    <>
      <nav className={Styles.Navbar}>
        <Link to=".." className={Styles.NavigateBack}>
          <FaArrowLeft />
        </Link>
        <h3>Tiny Tale</h3>
      </nav>
      <main className={Styles.Main}>
        <div className={Styles.Title}>
          <h3>{data.title}</h3>
          <small className={Styles.Feeling}>{data.userFelt} </small>
          <small className={Styles.Username}>by {data.postedby}</small>
        </div>
        <div className={Styles.Content}>
          <p>{data.content}</p>
        </div>
        {/* <div>icons</div> */} 
      </main>
    </>
  );
}
