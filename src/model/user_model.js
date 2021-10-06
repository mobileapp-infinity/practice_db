const mongoose = require("mongoose");
const validator = require("validator");
const User = new mongoose.model("User-Task-Validation", {
  name: {
    type: String,
    uppercase: true,
    trim: true,
    validate(value) {},
  },
  description: {
    type: String,
    trim: true,
    lowercase: true,
  },
  duration: {
    required: true,
    type: Number,
    default: 5,
    validate(value) {
      if (value > 6) {
        throw new Error("duration should not be greater than 6 months");
      }
    },
  },
  task_email: {
    required: true,
    type: String,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is not valid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    //   minlength: 7,
    validate(value) {
      if (value.length < 6) {
        throw new Error("password lenth should greater than 8 characteres.");
      }
      if (value.toLowerCase().includes("password")) {
        throw new Error('password is not "password" allowed!');
      }
    },
  },
});
module.exports=User