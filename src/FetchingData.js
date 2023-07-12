import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CountryDetails from "./CountryDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FetchingData.css";
import Welcoming from "./Welcoming";
import CountryList from "./CountryList";

const FetchingData = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
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

  const handleChange = (e) => {
    setSearch(e.target.value);
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
      {selectedCountry ? (
        <CountryDetails country={selectedCountry} />
      ) : (
        <>
          <input
            className="form-control "
            type="text"
            placeholder="Search countries"
            value={search}
            onChange={handleChange}
            style={{ width: "18%", margin: "0 auto 10px" }}
          />
          <CountryList countries={sortedList} handleClick={handleClick} />
        </>
      )}
    </div>
  );
};

export default FetchingData;
