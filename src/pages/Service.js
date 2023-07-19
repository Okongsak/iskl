import React from "react";
import SideMenu from "../components/SideMenu";

const Services = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Pacific Prime – Cigna Support Team & Services</h1>
      </div>
      <div className="row flex-column-reverse flex-lg-row">
        <div className="col-lg-8 col-md-7 col-12">
          <div className="service-detail">
            <h3>Pacific Prime</h3>
            <h4>Claims and General Enquiries</h4>
            <span>
              Email: ISKL@pacificprime.com <br /> Tel: +603 2779 2445 (Msia) / +65 6713
              5883 (SGP)
              <br />
              <br />
              Level 24, Menara Worldwide, <br /> 198 Jalan Bukit Bintang, <br /> 55100 Kuala
              Lumpur
            </span>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-12">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Services;
