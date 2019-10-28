# Google login API

An Oauth 2.0 authentication strategy using Passport.js and Node.js

## About

This is a simple Oauth 2.0 authentication stategy that uses Passport.js to authenticate users to any platform.
It is developed using Node.js and connects to a MongoDB database to store a user's google profile ID. 

Additionally, the api puts into use cookie-sessions which unlike express-sessions, directly store the google profile ID 
in a cookie unlike express-session which would store the profile id as session id.

## Usage

To use the api: 

Simply clone the repo and make sure to create a **dev.js** file in the **config** directory. This file will contain the values of 
your **mongodb database**, **cookie-session secret, Google Client ID and Google Client Secret**.

```
// dev.js

module.exports = {
  MONGODB_URL: "mongodb://localhost/your_database_name",
  GOOGLE_CLIENT_ID: "your_google_client_id",
  GOOGLE_CLIENT_SECRET: "your_google_client_secret",
  COOKIE_KEY: "some_random_cookie_key"
};
```
