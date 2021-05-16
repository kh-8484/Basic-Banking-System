import React, { useState, useRef, useEffect } from "react";
import M from "materialize-css";

function Transfer() {
  const form1 = useRef(null);
  const form2 = useRef(null);
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    M.FormSelect.init(form1.current);
    M.FormSelect.init(form2.current);
  }, []);

  const transfer = () => {
    fetch("/transaction", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        sender,
        receiver,
        amount,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "#4caf50 green" });
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}> TRANSFER 💵💸💴</h3>
      <div className="row card center" style={{ paddingTop: "1.5rem" }}>
        <div className="input-field col s6 offset-s3">
          <select
            ref={form1}
            value={sender}
            onChange={(e) => {
              setSender(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Sender
            </option>
            <option value="Angela">Angela</option>
            <option value="Khan">Khan</option>
            <option value="Ramesh">Ramesh</option>
            <option value="Faisal">Faisal</option>
            <option value="Ladva">Ladva</option>
            <option value="John">John</option>
            <option value="Jennifer">Jennifer</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Suresh">Suresh</option>
            <option value="Spidey">Spidey</option>
          </select>
          <label>Sender</label>
        </div>
        <div className="input-field col s6 offset-s3">
          <select
            ref={form2}
            value={receiver}
            onChange={(e) => {
              setReceiver(e.target.value);
            }}
          >
            <option value="" disabled selected>
              Receiver
            </option>
            <option value="Angela">Angela</option>
            <option value="Khan">Khan</option>
            <option value="Ramesh">Ramesh</option>
            <option value="Faisal">Faisal</option>
            <option value="Ladva">Ladva</option>
            <option value="John">John</option>
            <option value="Jennifer">Jennifer</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Suresh">Suresh</option>
            <option value="Spidey">Spidey</option>
          </select>
          <label>Receiver</label>
        </div>
        <div className="col s6 offset-s3">
          <input
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Amount"
            type="number"
            id="amount"
          />
        </div>
        <div className="col s12">
          <button
            onClick={() => transfer()}
            style={{ margin: "20px" }}
            className="btn-large black"
          >
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
