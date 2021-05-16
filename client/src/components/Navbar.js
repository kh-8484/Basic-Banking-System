import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper white">
          <Link
            to="/"
            className="brand-logo"
            style={{ color: "black", marginLeft: "4rem" }}
          >
            TSF
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/allUsers" style={{ color: "black" }}>
                View all users
              </Link>
            </li>
            <li>
              <Link to="/transfer" style={{ color: "black" }}>
                Transfer
              </Link>
            </li>
            <li>
              <Link to="/allTransactions" style={{ color: "black" }}>
                View all transactions
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
