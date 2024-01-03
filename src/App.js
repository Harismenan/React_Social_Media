import React from "react";

import { Routes, Route } from "react-router-dom";

import { DataProvider } from "./context/DataContext";

import About from "./About";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditItem from "./EditItem";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/edit/:id" element={<EditItem />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
    </div>
  );
};

export default App;
