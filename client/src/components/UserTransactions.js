import React, { useEffect, useState } from "react";

function UserTransactions() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allTransactions", {
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
        <h3 style={{ textAlign: "center" }}>ALL TRANSACTIONS</h3>
        <div className="container" style={{ paddingTop: "1rem" }}>
          <table className="centered striped" style={{ fontSize: "1.2rem" }}>
            <thead
              className="#212121 grey darken-4"
              style={{ fontSize: "1.2rem", color: "white" }}
            >
              <tr>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Amount</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                let temp = item.date;
                let transDate = new Date(temp).toLocaleString();
                return (
                  <tr>
                    <td>{item.sender}</td>
                    <td>{item.receiver}</td>
                    <td>₹ {item.amount}</td>
                    <td>{transDate}</td>
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

export default UserTransactions;
