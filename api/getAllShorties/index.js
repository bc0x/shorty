const { send } = require("micro");
const { getAllShorties } = require("../../queries");

module.exports = async (req, res) => {
  const shorties = await getAllShorties();
  send(res, 200, shorties);
};
