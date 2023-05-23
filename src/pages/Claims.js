import React from "react";
import SideMenu from "../components/SideMenu";

const Claim = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Claims Procedures</h1>
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

export default Claim;
