if (process.env.NODE_ENV && process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const base = require("airtable").base("app5ROBvDWAJQDxcu");

const getShorty = shorty => {
  const filter = `AND(ID = "${shorty}")`;
  let url;
  return new Promise((resolve, reject) => {
    base("SHORTIES")
      .select({
        filterByFormula: filter,
        fields: ["ID", "URL"],
        maxRecords: 1
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function(record) {
            url = {
              aid: record.id,
              ID: record.get("ID"),
              URL: record.get("URL")
            };
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
          }
          console.log(url);
          resolve(url);
        }
      );
  });
};

module.exports = {
  getShorty
};
