import React from "react";
import Feed from "./Feed";

function Home({posts}) {
  console.log(posts.length)
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

export default Home;
