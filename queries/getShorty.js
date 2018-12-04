const base = require('airtable').base('app5ROBvDWAJQDxcu');
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const getShorty = (shorty) => {
  return new Promise((resolve, reject) => {
    base('SHORTIES').find(shorty, function (err, record) {
      if (err){ 
        console.error(err); 
        reject(err);
      }
      resolve({
        shorty: record.get('ID'),
        url: record.get('URL')
      })
    });
  })

}

module.exports = {
  getShorty
};