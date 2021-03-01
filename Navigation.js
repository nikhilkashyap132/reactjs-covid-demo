import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Navigation() {

return(<nav>
      <Link style={{ color: "black", textDecoration: "none" }} to="/">
        <div style={{ fontSize: "20px" }}>HOME</div>
      </Link>
      <ul className="nav-links">
        <Link
          style={{
            color: "black",
            textDecoration: "none",
            marginTop: "10px",
            marginRight: "40px",
          }}
          to="/information"
        >
          <li>Information</li>
        </Link>
        
        <Link
          style={{ color: "black", textDecoration: "none", marginTop: "10px" }}
          to="/about"
        >
          <li>About</li>
        </Link>
      </ul>
    </nav>
);
}

export default Navigation;