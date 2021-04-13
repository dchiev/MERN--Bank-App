const express = require("express");
const plaid = require("plaid");
const router = express.Router();
const passport = require("passport");
const moment = require("moment");
const mongoose = require("mongoose");
require("dotenv").config();

// Load Account and User models
const Account = require("../../models/Account");
const User = require("../../models/User");
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const response = await client
  .createLinkToken({
    user: {
      client_user_id: "123-test-user-id",
    },
    client_name: "Plaid Test App",
    products: ["auth", "transactions"],
    country_codes: ["GB"],
    language: "en",
    webhook: "https://sample-web-hook.com",
    account_filters: {
      depository: {
        account_subtypes: ["checking", "savings"],
      },
    },
  })
  .catch((err) => {
    // handle error
  });
const linkToken = response.link_token;
const client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  linkToken,
  plaid.environments.sandbox,
  { version: "2018-05-22" }
);

var PUBLIC_TOKEN = null;
var ACCESS_TOKEN = null;
var ITEM_ID = null;

// Routes will go here
module.exports = router;
