import React from "react";
import { Link, Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <main>
      <Link to="/postPage/1">Post 1</Link>
      <br />
      <Link to="/postPage/2">Post 2</Link>
      <br />
      <Link to="/postPage/3">Post 3</Link>
      <br />
      <Link to="/postPage/new">New Post</Link>
      <Outlet />
    </main>
  );
};

export default PostLayout;
