import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FetchingData.css";
import Welcoming from "./Welcoming";
import CountryList from "./CountryList";

const FetchingData = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setList(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (country) => {
    navigate(`/country/${encodeURIComponent(country.name.common)}`);
  };

  const filteredList = list.filter((item) =>
    item.name.common.toLowerCase().startsWith(search.toLowerCase())
  );

  const sortedList = filteredList.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <div className="fetching-data-container">
      <div className="globe-background"></div>
      <Welcoming />
      <div id="content">
        <CountryList countries={sortedList} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default FetchingData;
