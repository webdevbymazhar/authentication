import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
  username: {
    type: String,
    required:[true,"Enter the User Name"]
  },
  email: {
    type: String,
    required:[true,"Enter the Email"]
  },
  password: {
    type: String,
    required:[true,"Enter the Password"]
  },
},{
  timestamps:true
});

export default mongoose.models?.User || mongoose.model("User", UserScheme);
