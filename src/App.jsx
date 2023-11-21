import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Pages/Profile/Profile";
import PostSingle from "./Pages/SinglePost/SinglePost";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element = {<Homepage/>}>
        <Route index element = {<Profile/>}/>
        <Route path="/post/:title"  element = {<PostSingle/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
