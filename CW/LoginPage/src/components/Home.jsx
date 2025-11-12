import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="home-container">
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>

      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/fetch">Fetch Data</Link>
      </nav>

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default Home;
