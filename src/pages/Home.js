import React from "react";
import SideMenu from "../components/SideMenu";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>ISKL - Cigna Studywell Supported by Pacific Prime</h1>
      </div>
      <div className="row flex-column-reverse flex-lg-row">
        <div className="col-lg-8 col-md-12 col-12">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="card">
                <div className="card-header">
                  <Link to="/announcements">Announcements</Link>
                </div>
                <div className="card-body">
                  <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-6 col-12">
                      <div className="card-detail">
                        <span>Notices from ISKL</span>
                        <Link to="/announcements">Read</Link>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <img className="img-card-body" src="/002.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card">
                <div className="card-header">
                  <Link to="/service">Support Team & Services</Link>
                </div>
                <div className="card-body">
                  <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-6 col-12">
                      <div className="card-detail">
                        <span>Support from Pacific Prime and ISKL</span>
                        <Link to="/service">View</Link>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <img className="img-card-body" src="/001.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card">
                <div className="card-header">
                  <Link to="/benefits">Your Benefits</Link>
                </div>
                <div className="card-body">
                  <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-6 col-12">
                      <div className="card-detail">
                        <span>In-depth look at your available benefits</span>
                        <Link to="/benefits">View</Link>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <img className="img-card-body" src="/002.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card">
                <div className="card-header">
                  <Link to="/claim">Claims Procedures</Link>
                </div>
                <div className="card-body">
                  <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-6 col-12">
                      <div className="card-detail">
                        <span>How to make a claim with your insurance</span>
                        <Link to="/claim">View</Link>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <img className="img-card-body" src="/003.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="card">
                <div className="card-header">
                  <Link to="/hospital">Hospitals List & Facilities</Link>
                </div>
                <div className="card-body">
                  <div className="row flex-column-reverse flex-md-row">
                    <div className="col-md-6 col-12">
                      <div className="card-detail">
                        <span>A list of the Hospitals Near You</span>
                        <Link to="/hospital">View</Link>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <img className="img-card-body" src="/004.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-12">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Home;
