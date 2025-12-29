import mongoose, { Schema } from "mongoose";

interface Users extends Document {
  userName: String;
  designation: String;
  email: String;
  cNo: Number;
  address: String;
}

const userSchema: Schema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cNo: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model<Users>("users", userSchema);

export default userModel;

// const user = new userModel({
//   userName: "lokesh",
//   designation: "se",
//   email: "exe@g.com",
//   cNo: 1234567890,
//   address: "XYZ BUILDING, Pune",
// });

// user.save();
