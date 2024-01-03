import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const NewPost = () => {
  const { title, content, setTitle, setContent, handleSubmit } =
    useContext(DataContext);
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label text-purple">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label text-purple">
          Content
        </label>
        <textarea
          className="form-control"
          id="content"
          rows="2"
          placeholder="Content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-outline-success">
        Submit
      </button>
    </form>
  );
};

export default NewPost;
