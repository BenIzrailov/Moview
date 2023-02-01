import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [clubName, setClubName] = useState("");

  return (
    <div>
      <h1>Welcome To the Movie Club</h1>
      <div>
        <input
          placeholder="Name"
          type="text"
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder="ClubName"
          type="text"
          onChange={(event) => setClubName(event.target.value)}
          required
        />
      </div>
      <Link
        onClick={(e) => (!name || !clubName ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${clubName}`}
      >
        <button type="submit">Enter Club</button>
      </Link>
    </div>
  );
};

export default Home;
