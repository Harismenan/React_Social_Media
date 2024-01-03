import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import DataContext from "./context/DataContext";

const Nav = () => {
  const { searchItem, setSearchItem, size } = useContext(DataContext);
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Dhuddu
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="new">
                New Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>
          </ul>

          <Link className="nav-link" to="/">
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Post ..."
                aria-label="Search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
              />
            </form>
          </Link>

          <div className="d-flex">
            {size.width < 768 ? (
              <FaMobileAlt className="nav-link" />
            ) : size.width < 992 ? (
              <FaTabletAlt className="nav-link" />
            ) : (
              <FaLaptop className="nav-link" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
