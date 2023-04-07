import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Its just a website for learning purposes.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default About;