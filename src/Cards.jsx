/** @format */

import React from "react";

function Cards() {
  return (
    <>
      <div className="card">
       

        <div>
          <span>Air Asia</span>
          <span>06:00</span>
          <span>5 hrs 20 mins</span>
          <span>15:34</span>
          <span>6757 INR</span>
        </div>
        <div>
          <span>I5-454</span>
          <span>BLR</span>
          <span style={{ borderBottom: "1.3px solid gray" }}></span>
          <span>HYD</span>
          <span className="tomatoColor">Outside policy</span>
        </div>
        <div>
          <span>Business Class</span>
          <span>03 Feb</span>
          <span>1 stop</span>
          <span>02 Feb</span>
          <span></span>
        </div>
        <div>
          <span>Partially Refundable</span>
          <span>Late Departure</span>
          <span className="tomatoColor">Hand Bag Only</span>
          <span></span>
          <span style={{ color: "#5993C4" }}>
            Flight Details
            <i style={{ marginLeft: "10px" }} className="fa fa-caret-down"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default Cards;
