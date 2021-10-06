const express = require("express");
const mongoose = require("./db/mongoose_validation");
const User = require("./model/user_model");
const app = express();
// const port = 3000;
const port = process.env.PORT || 3000;
console.log("index file");

// app.get("/users", (req, res) => {
//   res.send({ users: [{ name: "pragna", surname: "bhatt" }] });
// });
app.use(express.json());
app.post("/users", (req, res) => {
  console.log(req.body);
  const _user = User(req.body);
  _user
    .save()
    .then(() => {
      console.log(_user);

      res.send(_user);
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });

  // res.send("this is static only!");
});
var server = app.listen(port, () => {
  console.log("server is running ");

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
