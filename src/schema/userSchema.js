const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],

    minlength: [5, "First name must be alteast 5 characters long"],
    lowercase: true,
    trim: true, //if the user givees extra spaces then it will remove automatically
    maxlength: [20, "First name should be less than or equal to 20 character"],
  },

  lastName: {
    type: String,
    required: [true, "last name is required"],

    minlength: [5, "First name must be alteast 5 characters long"],
    lowercase: true,
    trim: true, //if the user givees extra spaces then it will remove automatically
    maxlength: [20, "Last name should be less than or equal to 20 character"],
  },
  mobileNumber: {
    type: String,
    trim: true,
    unique: [true, "Phone no is already in use"],
    required: [true, "Phone number shoud be provided"],
    minlength:[10,'Phone number should be of length 10'],
    maxlength:[10,'Phone number should be of length 10'],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Email should be provided"],
    unique: [true, "Email is already in use"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password"],
    minlength: [6, "Password should be minimum 6 characterlong "],
  },
  
  
  
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
module.exports=User;
