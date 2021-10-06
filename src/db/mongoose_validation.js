const mongoose = require("mongoose");
// const validator = require("validator");
const DbName = "testdb-api";
const connectionUrl = "mongodb://127.0.0.1:27017/" + DbName;

mongoose.connect(connectionUrl, (error, client) => {
  if (error) {
    return console.log(error);
  }

  // const _user = new User({
  //   name: "    task name         ",
  //   description: "DUMMY DESCRIPTION      ",
  //   // duration: 2,// if provided deafult and then not providing still working
  //   task_email: "Test@gmail.com",
  //   password: "123Pa1236",
  // });

  // _user
  //   .save()
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  console.log("connection done");
});
// {
//   name: 'TASK NAME',
//   description: 'dummy description',
//   duration: 5,
//   task_email: 'test@gmail.com',
//   _id: new ObjectId("615c2ad4a5461c7aa17337b0"),
//   __v: 0
// }
