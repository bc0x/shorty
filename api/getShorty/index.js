const { send } = require("micro");
const { getShorty } = require("../../queries");
const { normalizeUrl } = require("./../../util");

module.exports = async (req, res) => {
  try {
    const shorty = await getShorty(
      require("url")
        .parse(req.url)
        .pathname.substring(test.lastIndexOf("/") + 1)
    );
    if (shorty && shorty.URL) {
      res.writeHead(301, { Location: `http://${normalizeUrl(shorty.URL)}` });
      send(res, 301);
    }
    send(res, 404);
  } catch (e) {
    console.log(e);
    res.writeHead(500, { Location: "/error" });
    send(res, 500);
  }
};
