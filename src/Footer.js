import React, { useState, useEffect } from "react";
import countapi from 'countapi-js';

const Footer = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    countapi.visits().then((result) => {
      setVisits(result.value);
    });
  }, []);

  return (
    <footer style={{
      textAlign: "start",
      background: "#545547",
      position: "fixed",
      bottom: "0",
      left: "0",
      width: "fit-content",
      padding: "5px",
      borderRadius:"5px"
    }}>
      <p>Number of visitors: {visits}</p>
    </footer>
  );
};

export default Footer;
