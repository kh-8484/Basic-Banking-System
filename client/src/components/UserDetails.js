import React, { useEffect, useState } from "react";

function UserDetails() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allUsers", {
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((details) => {
        setData(details);
      });
  }, []);
  return (
    <div>
      <div>
        <h3 style={{ textAlign: "center" }}>USER DETAILS</h3>
        <div className="container" style={{ paddingTop: "1rem" }}>
          <table className="centered striped" style={{ fontSize: "1.2rem" }}>
            <thead
              className="#212121 grey darken-4"
              style={{ fontSize: "1.2rem", color: "white" }}
            >
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Total Balance</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>₹ {item.balance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
