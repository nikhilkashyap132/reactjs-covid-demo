import React from "react";


function Aboutpage() {
    return (
        <div
          style={{
            backgroundColor: "green",
            textAlign: "center",
          }}
        >
          <br />
          <h2>About Me!</h2>
          
          <br />
          <div
            style={{
              padding: "15px",
              backgroundColor: "#ADD8E6",
              color: "black",
              margin: "15px",
              borderRadius: "15px",
            }}
          >
            <h4>Who built this website?</h4>
            <div style={{ fontSize: "30px" }}>
              This demo site is created by Nikhil Kashyap.
            </div>
            <br />
            <h4>Connect me:</h4>
            <div style={{ fontSize: "30px" }}>
              LinkedIn{" "}
              <a href="https://www.linkedin.com/in/nikhil-kashyap-bb97a7161?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BEFPwkCzRs%2BQ%2BG9GQUXbwA%3D%3D" target="_blank">
                here
              </a>
              .
            </div>
            <br />
          </div>
          <br />
        </div>
      );
}

export default Aboutpage;