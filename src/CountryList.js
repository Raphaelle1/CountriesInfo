import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBRipple } from "mdb-react-ui-kit";

const CountryList = ({ countries, handleClick }) => {
  return (
    <MDBListGroup style={{ width: "18%", margin: "0 auto" }} className="list-countries">
      {countries.map((item) => (
        <MDBRipple key={item.name.common}>
          <MDBListGroupItem
            tag="a"
            href="#"
            action
            noBorders
            onClick={() => handleClick(item)}
            className="list-group-item list-group-item-secondary mb-2 d-flex justify-content-center fw-normal"
            style={{ borderRadius: "5px" }}
          >
            {item.name.common}
          </MDBListGroupItem>
        </MDBRipple>
      ))}
    </MDBListGroup>
  );
};

export default CountryList;
