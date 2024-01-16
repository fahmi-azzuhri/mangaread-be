const express = require("express");
const router = express.Router();
const mangaDirektori = require("../service/mangaDirektori");

/* GET Manga */
router.get("/", async function (req, res, next) {
  try {
    res.json(await mangaDirektori.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error mengammbil data Manga `, err.message);
    next(err);
  }
});

module.exports = router;
