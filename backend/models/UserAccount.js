const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  googleId: {
    type: String,
  },
  avatar: {
    type: String,
  },
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  bio: {
    type: String,
    // required: true
  },
  pincode: {
    type: String,
    required: true,
  },
  instagramHandle: {
    type: String,
  },
  youtubeHandle: {
    type: String,
  },
  LinkedWith: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  LinkedBy: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
  Views: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "views",
      },
    },
  ],
  totalSwags: {
    type: Number,
  },
  totalCringes: {
    type: Number,
  },
  totalViews: {
    type: Number,
  },
  totalKing: {
    type: Number,
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = Account = mongoose.model("account", AccountSchema);
