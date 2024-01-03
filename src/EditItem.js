import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const EditItem = () => {
  const {
    items,
    editTitle,
    setEditTitle,
    editContent,
    setEditContent,
    handleUpdate,
  } = useContext(DataContext);
  const { id } = useParams();

  const item = items.find((item) => item.id === id);

  useEffect(() => {
    setEditTitle(item.title);
    setEditContent(item.content);
  }, [item, setEditContent, setEditTitle]);

  return (
    <main>
      {
        <form
          onSubmit={(e) => {
            handleUpdate(e, id);
          }}
        >
          <h2 className="mb-4">Edit Post</h2>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              className="form-control"
              id="content"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      }
    </main>
  );
};

export default EditItem;
