import React from "react";
import { Link, Outlet } from "react-router-dom";

function PostLayout() {
  return (
    <>
      <Link to={"/postPage/1"}>Post 1</Link>
      <br />

      <Link to={"/postPage/2"}>Post 2</Link>
      <br />
      <Link to={"/postPage/3"}>Post 3</Link>
      <br />
      <Link to={"/postPage/newPost"}>New Post</Link>
      <br />
      <br />
      <Outlet />
    </>
  );
}

export default PostLayout;
