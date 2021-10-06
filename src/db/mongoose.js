const mongoose = require("mongoose");
// const DBName = "testdb-api";
// const connectionUrl = "mongodb://127.0.0.1:27017/" + DBName;

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const UserTask = mongoose.model("User-Task", {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  durtation: {
    type: Number,
    required: [true, "no duration added"],
    validate(value) {
      console.log(value);
      if (value < 6) {
        throw new Error("duration is less than 6 month");
      }
    },
    // mim: [1, "duration should grater than 2 "],
    // max: [6, "duration should not be greater than 6 months "],
  },
});

mongoose.connect(process.env.MONGODB_URL, (error, client) => {
  if (error) {
    return console.log(error);
  }

  //   console.log("connection sucess");

  const _user = new User({ name: "test user1", age: 10 });
  const _userTask = new UserTask({
    name: "task name",
    description: "this is description for dummy task",
    completed: false,
    durtation: 3,
  });
  _userTask
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((eror) => {
      console.log(eror);
    });
});
