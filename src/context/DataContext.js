import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import api from "../api/posts";

import useWindowSize from "../hooks/useWindowSize";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const size = useWindowSize();

  // code for fetching data
  const URL = "http://localhost:3500/items";
  const { data, isLoading, error } = useAxiosFetch(URL);
  useEffect(() => {
    setItems(data);
  }, [data]);

  // code for add data
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/items", {
        title,
        content,
      });
      setItems([...items, response.data]);
      setTitle("");
      setContent("");
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(error.message);
      }
    }
  };

  // code for delete data
  const handleDelete = async (id) => {
    try {
      await api.delete(`/items/${id}`);
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(error.message);
      }
    }
  };

  // code for update data
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const handleUpdate = async (e, id) => {
    e.preventDefault();
    try {
      const response = await api.put(`/items/${id}`, {
        title: editTitle,
        content: editContent,
      });
      const newItems = items.map((item) =>
        item.id === id
          ? {
              ...response.data,
            }
          : item
      );
      setItems(newItems);
      setEditTitle("");
      setEditContent("");
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else {
        console.log(error.message);
      }
    }
  };

  const [searchItem, setSearchItem] = useState("");

  return (
    <DataContext.Provider
      value={{
        searchItem,
        setSearchItem,
        size,
        items,
        searchItem,
        editTitle,
        setEditTitle,
        editContent,
        setEditContent,
        title,
        setTitle,
        content,
        setContent,
        handleSubmit,
        handleUpdate,
        handleDelete,
        isLoading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
