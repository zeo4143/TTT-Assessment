import React from "react";
import Styles from "./Posts.module.css";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Posts({ postDetails }) {
  //Converting Views to k & Ms
  const views = (views) =>
    views >= 1000000
      ? `${(views / 1000000).toFixed(1)}M`
      : views >= 10000
      ? `${(views / 1000).toFixed(1)}K`
      : views?.toString();

  //Extracting Date from the posts
  const date = (date) =>
    new Date(date).getFullYear() === new Date().getFullYear()
      ? new Date(date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        })
      : new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

  // Check if the post date is in the present year

  return (
    <div className={Styles.Container}>
      <div className={Styles.Body}>
        <div className={Styles.Header}>
          <h3 className={Styles.Title}>{postDetails?.title}</h3>
          <span className={Styles.Like}>
            <AiOutlineLike className="Likes" />
          </span>
        </div>
        <div className={Styles.Content}>
          <p className={Styles.ContentText}>{postDetails?.content}</p>
          <Link to={`/post/${postDetails?.id}`} state={{data : postDetails}}>...<small>Show More</small></Link>
        </div>
        <div className={Styles.Footer}>
          <div className={Styles.PostedBy}>
            <p className={Styles.PostType}>{postDetails?.userFelt}</p>
            <p> by {postDetails?.postedby}</p>
          </div>
          <div className={Styles.PostTimingAndViews}>
            <small>{date(postDetails?.timestamp)}</small>
            <span className={Styles.Gap}></span>
            <small>{postDetails?.readingTime} Read</small>
            <span className={Styles.Gap}></span>
            <small>{views(postDetails?.views)} Views</small>
          </div>
        </div>
      </div>
    </div>
  );
}
