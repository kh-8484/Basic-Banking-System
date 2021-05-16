import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        color: "black",
        backgroundImage:
          "url(https://image.freepik.com/free-vector/businessman-watering-dollar-plant-growth-wealth-investment-concept-bank-building-exterior_48369-19931.jpg)",
        backgroundPosition: "right",
        backgroundSize: "75%",
        backgroundRepeat: "no-repeat",
        height: "90vh",
      }}
    >
      <div
        style={{
          paddingTop: "12rem",
          paddingLeft: "4rem",
        }}
      >
        <h3
          style={{
            fontSize: "2rem",
            lineHeight: "0.5rem",
          }}
        >
          WELCOME TO
        </h3>
        <h2
          style={{
            fontSize: "4rem",
            lineHeight: "2rem",
          }}
        >
          <strong>TSF BANK</strong>
        </h2>
      </div>
      <div style={{ marginLeft: "4.5rem" }}>
        <Link to="/allUsers" className="waves-effect waves-light btn blue">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;
