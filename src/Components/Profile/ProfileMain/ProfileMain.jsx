import React from "react";
import Styles from "./ProfileMain.module.css";
import User from "../UserDetails/User";
import Posts from "../Posts/Posts";
import {data} from "../../../assets/data";

export default function ProfileMain() {
    console.log(data.user);

  return (
    <div className={Styles.Container}>
      <User userDetails={data.user} />
      <div className={Styles.Posts}>
        <h1 className={Styles.PostsLen}>{data.posts.length} POSTS</h1>
        {data.posts.map((post) => (
          <Posts postDetails={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
