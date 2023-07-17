import React, { useState, useEffect } from "react";
// import countapi from 'countapi-js';

const Footer = () => {
  const visits = 1;

  return (
    <footer style={{
      width: "fit-content",
      padding: "5px",
      borderRadius:"5px",
      position: "fixed",
      bottom: "0px",
      height: "5%",
      color: "white",
    }}>
      <p>Number of visitors: {visits}</p>
    </footer>
  );
};

export default Footer;
