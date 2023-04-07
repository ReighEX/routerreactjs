import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>You can contact me by click the button below! </p>
      <Link to="http://wa.me/6289652229817/">
        <button>Whatsapp</button></Link>
      <br />
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default Contact;