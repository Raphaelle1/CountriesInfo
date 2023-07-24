import React, { useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const [visits, setVisits] = useState(1);

  useEffect(() => {
    axios
      .get("https://www.2e2.fr/countries/be/count_api.php")
      .then((res) => {setVisits(res.data.Visites);})
      .catch((error) => console.log(error));
  }, []);

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
