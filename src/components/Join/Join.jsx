import React from "react";
import "./Join.css";

function Join() {
  return (
    <div className="Join" id="jooin-us">
      <div className="left-j">
      <hr/>
        <div>
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container">
          <input type="email" name="user_email" placeholder="Enter Your Email Address" />
          <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
