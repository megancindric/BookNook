import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import { ReactComponent as Books } from "../../assets/books.svg";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Books fill={"white"} height={48} width={48} />
            <b>BookNook</b>
          </Link>
        </li>
        <li>
          <button>Search Books</button>
          {user ? (
            <>
              <button>Favorites</button>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/login")}>Login</button>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
