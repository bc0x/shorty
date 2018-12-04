const { send } = require("micro");
const { getShorty } = require("../../queries");

module.exports = async (req, res) => {
  const shorties = await getShorty("bcox1");
  send(res, 200, shorties);
};
