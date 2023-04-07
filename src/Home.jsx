import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my website!</p>
      <Link to="/about">About</Link>
      <br />
      <Link to="/Contact">Contact Us!</Link>
    </div>
  );
}

export default Home;