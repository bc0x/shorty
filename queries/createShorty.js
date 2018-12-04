if (process.env.NODE_ENV && process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const base = require("airtable").base("app5ROBvDWAJQDxcu");

const createShorty = ({ ID, URL, TTL }) => {
  return new Promise((resolve, reject) => {
    base("SHORTIES").create(
      {
        ID: `${ID}`,
        URL: `${URL}`,
        TTL: `${TTL}`
      },
      function(err, record) {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve({
          ID: record.get("ID"),
          URL: record.get("URL")
        });
      }
    );
  });
};

module.exports = {
  createShorty
};
