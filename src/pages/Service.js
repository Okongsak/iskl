import React from "react";
import SideMenu from "../components/SideMenu";

const Services = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Pacific Prime – Cigna Support Team & Services</h1>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-7 col-12"></div>
        <div className="col-lg-4 col-md-5 col-12">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Services;
