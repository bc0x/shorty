const { send } = require('micro');
const { getAllShorties, getShorty } = require('./queries')

module.exports = async (req, res) => {
  // console.log(req);
  console.log(req.url);
  // const shorties = await getAllShorties();
  const shorties = await getAllShorties('bcox1');
  send(res, 200, shorties)
}