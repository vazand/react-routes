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

function App() {
  return (
    <div className="m-4">
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to={"/about"}>About </Link>
          </li>
          <li>
            <Link to="/newPost">NewPost </Link>
          </li>
          <li>
            <Link to={"/post"}>Post </Link>
          </li>
        </ul>
      </nav>
      {/*
      The Routes and route will help us to reach the page from url
      the Link used to show us the same in the front`
      */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newPost" element={<NewPost />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
      {/* <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer /> */}
    </div>
  );
}

export default App;
