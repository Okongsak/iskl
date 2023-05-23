import React from "react";
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
  return (
    <div className="sidemenu">
      <h2>Menu</h2>
      <ul>
        <li>
          <NavLink 
            to="/"
            activeClassName="active"
          >
            Home
          </NavLink >
        </li>
        <li>
          <NavLink 
            to="/announcements"
            activeClassName="active"
          >
            Announcements
          </NavLink >
        </li>
        <li>
          <NavLink 
            to="/service"
            activeClassName="active"
          >
            Pacific Prime – Cigna Support Team & Services
          </NavLink >
        </li>
        <li>
          <NavLink 
            to="/benefits"
            activeClassName="active"
          >
            Table of Benefits
          </NavLink >
        </li>
        <li>
          <NavLink 
            to="/hospital"
            activeClassName="active"
          >
            Hospitals List & Facilities
          </NavLink >
        </li>
        <li>
          <NavLink 
            to="/claim"
            activeClassName="active"
          >
            Claims Procedures
          </NavLink >
        </li>
        <li>
          <NavLink 
            to="/quicklink"
            activeClassName="active"
          >
            Quick links
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
