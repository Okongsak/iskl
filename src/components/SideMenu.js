import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <div className="sidemenu">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link
            to="/"
            className={url === "/" ? " active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/announcements"
            className={url === "/announcements" ? " active" : ""}
          >
            Announcements
          </Link>
        </li>
        <li>
          <Link
            to="/service"
            className={url === "/service" ? " active" : ""}
          >
            Pacific Prime – Cigna Support Team & Services
          </Link>
        </li>
        <li>
          <Link
            to="/benefits"
            className={url === "/benefits" ? " active" : ""}
          >
            Table of Benefits
          </Link>
        </li>
        <li>
          <Link
            to="/hospital"
            className={url === "/hospital" ? " active" : ""}
          >
            Hospitals List & Facilities
          </Link>
        </li>
        <li>
          <Link
            to="/claim"
            className={url === "/claim" ? " active" : ""}
          >
            Claims Procedures
          </Link>
        </li>
        <li>
          <Link
            to="/quicklink"
            className={url === "/quicklink" ? " active" : ""}
          >
            Quick links
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
