/** @format */

import React from "react";
import "./App.css";
import Cards from "./Cards";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <img
              src="/itilitelogo.png"
              width="60px"
              height="auto"
              alt="brand logo"
            />
          </li>
          <li id="dashboard">Dashboard</li>
          <li>Create New Trip</li>
          <li>Service Request</li>
          <li>Use IL cash</li>
        </ul>
        <ul>
          <li>
            <i className="fa fa-bell" style={{ color: "tomato" }}></i>
          </li>
          <li>
            <i className="fa fa-user-circle" style={{ color: "tomato" }}></i>
          </li>
          <li>
            Shreyansh
            <i style={{ marginLeft: "10px" }} className="fa fa-caret-down"></i>
          </li>
        </ul>
      </nav>
      <div style={{ backgroundColor: "#eff5f5", minHeight: "90vh" }}>
        <div>
          <ul
            style={{ marginLeft: "35.5%", marginRight: "14%" }}
            id="subHeading"
          >
            <li>Departure</li>
            <li>Duration</li>
            <li>Arrival</li>
            <li>
              Price
              <i style={{ marginLeft: "10px" }} className="fa fa-arrow-up"></i>
            </li>
          </ul>
        </div>
        <div id="main">
          <aside>
            <p style={{ color: "tomato" }}>
              <i className="fa fa-edit" style={{ marginRight: "10px" }}></i>
              Update Itinerary
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "tomato",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  height="20px"
                  alt="filter"
                  width="20px"
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/filter-30-204031.png"
                ></img>
                <span>Filters</span>
              </div>
              <span>Clear All</span>
            </div>
            <div style={{ color: "tomato", fontSize: "13px" }}>
              <span>Include outside policy</span>
              <span style={{ float: "right", fontSize: "20px" }}>
                <i className="fa fa-toggle-on"></i>
              </span>
            </div>
            <p>Maximum Stops</p>
            <div id="stops">
              <span>Non stop</span>
              <span>Upto 1 stop</span>
              <span>Non 2+ stops</span>
            </div>
            <p
              style={{
                paddingBottom: "3px",
                borderBottom: "2px solid Tomato",
                marginBottom: "5px",
              }}
            >
              Departure Time
            </p>
            <p style={{ marginTop: "2px", fontSize: "12px" }}>
              21:00 hrs - 23:00 hrs
            </p>
            <p
              style={{
                paddingBottom: "3px",
                borderBottom: "2px solid Tomato",
                marginBottom: "5px",
              }}
            >
              Duration
            </p>{" "}
            <p style={{ marginTop: "2px", fontSize: "12px" }}>
              01 hrs 00 mins - 07 hrs 30 mins
            </p>
          </aside>
          <main>
            {[1, 2, 3, 4, 5, 6].map((ele) => {
              return <Cards />;
            })}
          </main>
        </div>
      </div>

      {/* footer */}
      <footer>
        <div>
          <div>
            <span>
              Air Asia <br></br>I5 - 738
            </span>

            <span>
              8:30 <br></br>DEL<br></br>02 Feb
            </span>
            <span>
              10:35 <br></br>BOM<br></br>02 Feb
            </span>
            <span>3717</span>
          </div>

          <p style={{color: "tomoto"}}>** Outside Policy Require Approvals!!</p>
        </div>
        <div>
          <p style={{ marginTop: "10px"}}>Banglore To Hyderabad</p>
          <br></br>
          <span
            style={{ borderBottom: "2px solid tomato", paddingBottom: "10px" }}
          >
            03 Feb 05:00 hrs - 09:00 hrs
          </span>
        </div>
        <div>
          {" "}
          <p style={{ marginTop: "10px"}}>Hyderabad To Banglore</p>
          <p>06 Feb 12:00 hrs - 14:00 hrs</p>
        </div>
        <div>
          {" "}
          <p style={{ marginTop: "10px"}}>
            Banglore To Hyderabad</p>
          <p>
            10 Feb 17:00 hrs - 19:00 hrs</p>
        </div>
        <div style={{ textAlign: "center", borderLeft:"1.2px solid black" }}>
          <p style={{ marginTop: "10px"}}>Budget: 4612 INR</p>

          <p>Your Package: 3784 INR</p>
          <button className="btn1">Cancel</button>
          <button className="btn2">Proceed</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
