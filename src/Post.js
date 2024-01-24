import React from "react";
import { Link, useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  return (
    <div>
      <h1>You are in Post {id}</h1>
      {/* <Link to={"/postPage/newPost"}>New Post</Link> */}
    </div>
  );
}

export default Post;
