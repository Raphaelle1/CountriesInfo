import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FetchingData from "./FetchingData";
import CountryDetails from "./CountryDetails";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<FetchingData />} />
          <Route path="/country/:countryName" element={<CountryDetails />} />
        </Routes> 
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
