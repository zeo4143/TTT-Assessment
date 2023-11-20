import React, { useEffect, useState } from "react";
import Styles from "./Profile.module.css";
import axios from "axios";
import User from "../../Components/Profile/User/User";
import Posts from "../../Components/Profile/Posts/Posts";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

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
        <Tabs variant="enclosed" colorScheme="gray">
          <TabList>
            <Tab fontWeight="bold" color="#4a96e5" padding="min(1rem, 2vw) min(1.5rem, 5vw)">
              <h1>{data?.posts.length} POSTS</h1>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {data?.posts.map((post) => (
                <Posts postDetails={post} key={post.id} />
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
