const { send, json } = require("micro");
const { createShorty } = require("../../queries");

module.exports = async (req, res) => {
  const toCreate = await json(req);
  const shorty = await createShorty(toCreate);
  send(res, 200, shorty);
};
