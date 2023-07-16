import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";

const CountryList = ({ countries, handleClick }) => {
  const [searchText, setSearchText] = useState("");

  const filteredCountries = countries.filter((item) =>
    item.name.common.toLowerCase().startsWith(searchText.toLowerCase())
  );

  return (
    <Dropdown className="d-flex justify-content-center">
      <Dropdown.Toggle variant="secondary" id="country-dropdown">
        Select a Country
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width: "13%", backgroundColor: "lightgray" }}>
        <FormControl
          type="text"
          placeholder="Search country..."
          className="mb-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {filteredCountries.map((item) => (
          <Dropdown.Item
            key={item.name.common}
            onClick={() => handleClick(item)}
          >
            {item.name.common}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CountryList;
