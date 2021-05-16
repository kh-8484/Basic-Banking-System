const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Transaction = mongoose.model("Transaction");

router.post("/setUser", (req, res) => {
  const { name, email, balance } = req.body;
  if (!name || !email || !balance) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "user already exists" });
      }
      const user = new User({
        name,
        email,
        balance,
      });
      user
        .save()
        .then((user) => {
          res.json({ message: "saved successfully" });
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/allUsers", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/transaction", (req, res) => {
  const { sender, receiver, amount } = req.body;
  if (!sender || !receiver || !amount) {
    return res.status(422).json({ error: "please add all the fields" });
  } else if (sender == receiver) {
    return res.status(422).json({ error: "please select different user" });
  }
  User.findOne({ name: sender }).then((senderUser) => {
    User.findOne({ name: receiver }).then((receiverUser) => {
      if (senderUser.balance < amount) {
        return res.status(422).json({ error: "Insufficient Balance" });
      } else {
        let senderAmount = senderUser.balance - parseInt(amount);
        let receiverAmount = receiverUser.balance + parseInt(amount);

        User.findOneAndUpdate(
          { name: sender },
          { balance: senderAmount },
          { new: true }
        ).exec((error, result) => {
          if (error) {
            return res.status(422).json({ error: "err at sender" });
          }
        });

        User.findOneAndUpdate(
          { name: receiver },
          { balance: receiverAmount },
          { new: true }
        ).exec((error, result) => {
          if (error) {
            return res.status(422).json({ error: "err at receiver" });
          }
        });

        const transaction = new Transaction({
          sender,
          receiver,
          amount,
          date: Date.now(),
        });
        transaction
          .save()
          .then((transaction) => {
            res.json({ message: "transacted successfully" });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  });
});

router.get("/allTransactions", (req, res) => {
  Transaction.find()
    .sort("-date")
    .then((transactions) => {
      res.json(transactions);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
