const base = require("airtable").base("app5ROBvDWAJQDxcu");

const getAllShorties = () => {
  return new Promise((resolve, reject) => {
    let shorties = [];
    base("SHORTIES")
      .select({
        fields: ["ID", "URL"]
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(function(record) {
            shorties.push({
              aid: record.id,
              ID: record.get("ID"),
              URL: record.get("URL")
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
          }
          resolve(shorties);
        }
      );
  });
};

module.exports = {
  getAllShorties
};
