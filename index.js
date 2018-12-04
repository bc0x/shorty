const { send } = require('micro');
const { getShorties } = require('./queries')

module.exports = async (req, res) => {
  const shorties = await getShorties();
  send(res, 200, shorties)
}