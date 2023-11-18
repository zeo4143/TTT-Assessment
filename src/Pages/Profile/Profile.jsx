import React, { useEffect, useState } from "react";
import Styles from "./Profile.module.css";
import axios from "axios";
import User from "../../Components/Profile/UserDetails/User";
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
    <div className={Styles.Container}>
      <User userDetails={data?.user} />
      <div className={Styles.Posts}>
        <h1 className={Styles.PostsLen}>{data?.posts.length} POSTS</h1>
        {data?.posts.map((post) => (
          <Posts postDetails={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
