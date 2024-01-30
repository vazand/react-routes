import React from "react";
import { Link, useParams } from "react-router-dom";

function Post({ post }) {
  //const { id } = useParams();
  return (
    <article className="bg-gray-400 p-2 rounded-lg ">
      <h2 className="text-lg">{post.title}</h2>
      <p className="text-xs">{post.dateTime}</p>
      <p className="text-base">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}{" "}
      </p>
    </article>
  );
}

/* {<div>
  <h1>You are in Post {id}</h1>
  { <Link to={"/postPage/newPost"}>New Post</Link> }
</div>} */
export default Post;
