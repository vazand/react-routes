import React from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";

function PostPage({posts}) {
  return (
    <main className="">
      {posts.length ? (
        <Feed posts={posts} />
      ):(
        <p>No posts to Display</p>
      )}
    </main>
  );
}

export default PostPage;
