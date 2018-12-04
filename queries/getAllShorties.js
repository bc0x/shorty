const base = require('airtable').base('app5ROBvDWAJQDxcu');
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const getAllShorties = () => {
  return new Promise((resolve, reject) => {
    let shorties = [];
    base('SHORTIES').select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 2,
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.
      records.forEach(function (record) {
        shorties.push({
          shorty: record.get('ID'),
          url: record.get('URL')
        })
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

    }, function done(err) {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(shorties);
    });
  })

}

module.exports = {
  getAllShorties
};