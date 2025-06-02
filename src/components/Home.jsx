import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <div className="hero">
          <div className="hero-banner">
            <h4>Book Store</h4>
            <p>Search ahead!</p>
            <input
              type="text"
              placeholder="e.g Brave New World"
              className="input-bar"
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate("/" + name);
                }
              }}
            />
            <button className="hero-btn" onClick={() => navigate("/" + name)}>
              Search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
