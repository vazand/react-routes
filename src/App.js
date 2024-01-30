import "./App.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Nav from "./Nav";
import Home from "./Home.js";
import NewPost from "./NewPost.js";
import PostPage from "./PostPage.js";
import About from "./About.js";
import Missing from "./Missing.js";
import { Link, Route, Routes } from "react-router-dom";
import Post from "./Post.js";
import PostLayout from "./PostLayout.js";
import { useEffect, useState } from "react";
import onePieceJsonData from "./OnePiece-LuffyCrew.json";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState(onePieceJsonData.luffyCrew);
  console.log(posts);
  return (
    <div className=" m-1 rounded-sm flex flex-col min-h-screen">
      <Header title={"ONEPIECE FANDOM "} />
      <main className="flex-grow">
        <Nav search={search} setSearch={setSearch} />
        <Routes className="">
          <Route
            path="/"
            element={
              <>
                <Home posts={posts} />
                <PostPage posts={posts} />
                <About />
                <Missing />
              </>
            }
          />
          <Route path="/PostPage" element={<PostPage posts={posts} />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <NewPost />
      </main>
      <Footer />
      {/* <Header title={"ONEPIECE FANDOM "} />
      <Nav search={search} setSearch={setSearch} />
      <Home posts={posts} />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer /> */}
    </div>
  );
}

export default App;

/* {
  
      The Routes and route will help us to reach the page from url
      the Link used to show us the same in the front`
     
} */

// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
//   <Route path="/newPost" element={<NewPost />} />
//   <Route path="/postPage" element={<PostLayout />}>
//     <Route index element={<PostPage />} />
//     <Route path={":id"} element={<Post />} />
//     <Route path="newPost" element={<NewPost />} />
//   </Route>
//   {/* <Route path="/postPage/:id" element={<Post />} />
//       <Route path="/postPage/newPost" element={<NewPost />} /> */}
//   <Route path={"*"} element={<Missing />} />
// </Routes>;

// { <nav>
//   <ul>
//     <li>
//       <Link to="/">Home </Link>
//     </li>
//     <li>
//       <Link to={"/about"}>About </Link>
//     </li>
//     {/* <li>
//             <Link to="/newPost">NewPost </Link>
//           </li> */}
//     <li>
//       <Link to={"/postPage"}>PostPage </Link>
//     </li>
//   </ul>
// </nav>;}

/* useEffect(() => {
  console.log(posts)

 
}, []) */
