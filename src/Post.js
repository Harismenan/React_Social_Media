import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  return (
    <main>
      <h1>Post {id}</h1>
    </main>
  );
};

export default Post;
