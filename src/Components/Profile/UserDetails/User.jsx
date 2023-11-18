import React from "react";
import Styles from "./User.module.css";
import { CiHeart, CiStar } from "react-icons/ci";
import { AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import { MdDiamond, MdOutlineVerified } from "react-icons/md";
import defaultPic from "../../../assets/profilePic.webp"

export default function User({ userDetails }) {
  
  //Converting count IN Ks & Ms
  const count = (value) =>
    value >= 1000000
      ? `${(value / 1000000).toFixed(1)}M`
      : value >= 10000
      ? `${(value / 1000).toFixed(1)}K`
      : value.toString();

  return (
    <>
      <div className={Styles.BackGroundImage}>
        <img src={userDetails.backGroungImage} className={Styles.BImg} />
      </div>
      <div className={Styles.UserContent}>
        <img src={userDetails.avatar || defaultPic} className={Styles.Avatar} />
        <div className={Styles.UserDetails}>
          <div className={Styles.UserName}>
            <h2>{userDetails.username}</h2>
            <span>
              <MdDiamond className="Diamond" />
            </span>
            <span>
              <MdOutlineVerified className="Verified" />
            </span>
          </div>
          <div className={Styles.UserNetwork}>
            <center>
              <p className={Styles.NetworkCount}>
                {count(userDetails.followers)}
              </p>
              <small>Follwers</small>
            </center>
            <center>
              <p className={Styles.NetworkCount}>
                {count(userDetails.following)}
              </p>
              <small>Follwing</small>
            </center>
          </div>
        </div>
      </div>
      <div className={Styles.UserDescription}>
        {userDetails.bio && <p className={Styles.Bio}>{userDetails.bio}</p>}
        {userDetails.website && (
          <a href={userDetails.website} target="_blank">
            <span>{userDetails.website}</span>
          </a>
        )}
        <div className={Styles.Badges}>
          <div className={Styles.BadgeIcons}>
            <CiStar className="Stars" />
            <small>{count(userDetails.highestStars)}</small>
          </div>
          <div className={Styles.BadgeIcons}>
            <p>
              <AiOutlineLike className="Likes" />
            </p>
            <small>{count(userDetails.highestLikes)}</small>
          </div>
          <div className={Styles.BadgeIcons}>
            <AiOutlineEye className="Views" />
            <small>{count(userDetails.highestViews)}</small>
          </div>
          <div className={Styles.BadgeIcons}>
            <CiHeart className="Hearts" />
            <small>{count(userDetails.highestHearts)}</small>
          </div>
        </div>
      </div>
    </>
  );
}
