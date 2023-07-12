import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";

export default function Welcoming() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MDBTypography
        tag="div"
        className="display-3 mt-1 mb-5 text-light fw-light"
      >
        Countries Explorer
      </MDBTypography>
    </div>
  );
}
