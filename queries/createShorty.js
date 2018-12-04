const base = require("airtable").base("app5ROBvDWAJQDxcu");
if (process.env.NODE_ENV && process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

const createShorty = shorty => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
};

module.exports = {
  createShorty
};
