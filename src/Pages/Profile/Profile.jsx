import React, { useEffect, useState } from "react";
import Styles from "./Profile.module.css";
import axios from "axios";
import User from "../../Components/Profile/User/User";
import Posts from "../../Components/Profile/Posts/Posts";

export default function Profile() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("rawData/data.json");
      const data = response?.data;
      setData(data);
    } catch (error) {
      console.log({ error: error.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <User userDetails={data?.user} />
      <div className={Styles.Posts}>
        <div className={Styles.PostsCount}>
          <h1 className={Styles.Count}>{data?.posts.length} POSTS</h1>
          <span className={Styles.BorderRight}></span>
          <span className={Styles.BorderBottom}></span>
        </div>

        {data?.posts.map((post) => (
          <Posts postDetails={post} key={post.id} />
        ))}
      </div>
    </>
  );
}
