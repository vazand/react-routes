import React from "react";
import { Link } from "react-router-dom";

function Nav({ search, setSearch }) {
  function handleOnChange(params) {
    setSearch(params.target.value);
  }
  return (
    <nav className="  grid grid-flow-col-dense bg-black  ">
      <form className="p-2" onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="search"
          className=""
          style={{ position: "absolute", left: "-9999999px" }}
        >
          SearchPosts
        </label>
        <input
          className="p-2  border border-stone-950 rounded-3xl "
          type="text"
          id="search"
          value={search}
          onChange={(e) => {
            handleOnChange(e);
          }}
          placeholder={"search posts"}
        />
      </form>
      <div className="flex align-middle text-white p-2 ">
        <ul className="grid grid-flow-col gap-1  ">
          <li className="hover:bg-green-600 p-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:bg-green-600 p-2">
            <Link to={"/PostPage"}>Postpage</Link>
          </li>
          <li className="hover:bg-green-600 p-2">
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
