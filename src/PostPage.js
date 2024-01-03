import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const PostPage = () => {
  const { items, handleDelete } = useContext(DataContext);
  const { id } = useParams();

  const item = items.find((item) => item.id === id);

  return (
    <main>
      {item ? (
        <>
          <h1> {id}</h1>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </>
      ) : (
        <h1>Item with id {id} does not exist</h1>
      )}

      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>

      <span style={{ margin: "0 10px" }}></span>

      <Link to={`/edit/${id}`}>
        <button type="button" className="btn btn-outline-info">
          Edit
        </button>
      </Link>
    </main>
  );
};

export default PostPage;
