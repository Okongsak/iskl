import React from "react";
import SideMenu from "../components/SideMenu";

const Announcement = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Announcements</h1>
      </div>
      <div className="row flex-column-reverse flex-lg-row">
        <div className="col-lg-8 col-md-7 col-12">
          <div className="announce-detail">
            <h6 className="mb-3">Introducing Your Insurance Broker Pacific Prime</h6>
            <span className="mb-3">Pacific Prime is delighted to be ISKL’s insurance broker! We are a leading insurance benefits broker specializing in Medical, Home, Travel, Critical Illness, and Personal Accident insurance for both individuals and corporate clients.</span>
            <span className="mb-3">Our role is to assist ISKL staff with any queries or issues relating to your medical insurance. Whether it is a simple question regarding what the policy covers, insurer servicing issues, or assistance with acquiring the relevant paperwork ahead of your hospitalization, we are here to help. So please feel free to contact us with your medical insurance-related questions.</span>
            <span className="mb-3">We have launched this portal for ISKL staff to provide you with a single source for policy announcements and general information, important contact details, and insurance forms.</span>
            <h6 className="mb-3">Renewal – 1st August 2023</h6>
            <span className="mb-3">We are pleased to announce that your insurer for the forthcoming renewal of 1st August 2023 will be changed to Cigna – StudyWell.</span>
            <span className="mb-3">From all of us at Pacific Prime, we look forward to working with you.</span>
            <span className="mb-3">The ISKL Pacific Prime Team</span>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-12">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Announcement;
