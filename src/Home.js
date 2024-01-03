import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./context/DataContext";

const Home = () => {
  const { items, searchItem, isLoading, error } = useContext(DataContext);
  return (
    <div className="container">
      {isLoading && <p style={{ color: "green" }}>Loading...</p>}
      {error && <p style={{ color: "red" }}>{`error : ${error}`}</p>}
      {!isLoading && !error && (
        <div className="row">
          {items
            .filter((item) => {
              if (searchItem === "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                // display the post title line by line
                <div key={item.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <Link to={`/${item.id}`} className="btn btn-primary">
                        View Post
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Home;
