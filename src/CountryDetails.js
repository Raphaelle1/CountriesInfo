import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import "./App";

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);
  const { countryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => {
        setCountryDetails(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [countryName]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!countryDetails) {
    return <p>Loading country details...</p>;
  }

  const {
    name,
    continents,
    capital,
    region,
    population,
    languages,
    flags,
    maps,
  } = countryDetails;
  const languageKeys = Object.keys(languages);
  const languageValues = languageKeys.map((key) => languages[key]);

  return (
    <div className="d-flex justify-content-center align-items-center  bg-details ">
      <MDBCard style={{ maxWidth: "400px" }} className="shadow">
        <MDBCardImage
          position="top"
          alt="Flag"
          src={flags?.svg}
          className="img-fluid"
        />
        <MDBCardBody
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MDBCardTitle>{`${name.common} / ${name.official}`}</MDBCardTitle>
          <MDBCardText>
            Continent:<span class="fw-medium"> {continents}</span>{" "}
          </MDBCardText>
          <MDBCardText>
            Capital:<span class="fw-medium"> {capital?.[0]}</span>{" "}
          </MDBCardText>
          <MDBCardText>
            Region:<span class="fw-medium"> {region}</span>{" "}
          </MDBCardText>
          <MDBCardText>
            Languages:{" "}
            <span class="fw-medium"> {languageValues.join(", ")}</span>
          </MDBCardText>
          <MDBCardText>
            Size of population: <span class="fw-medium">{population}</span>
          </MDBCardText>
          <button type="button" class="btn btn-light mb-3 ">
            <a
              href={maps.googleMaps}
              target="_blank"
              rel="noreferrer"
              style={{ color: "gray", textDecoration: "none" }}
            >
              Explore {countryName} on Google Maps
            </a>
          </button>

          <button
            type="button"
            class="btn btn-secondary mb-5"
            onClick={handleGoBack}
          >
            Return
          </button>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default CountryDetails;
