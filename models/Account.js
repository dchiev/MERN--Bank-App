const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = mongoose.Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  accessToken: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
    require: true,
  },
  institutionId: {
    type: String,
    required: true,
  },
  accountName: {
    type: String,
  },
  accountName: {
    type: String,
  },
  accountType: {
    type: String,
  },
  accountSubtype: {
    type: String,
  },
});

module.exports = Account = mongoose.model("account", AccountSchema);
