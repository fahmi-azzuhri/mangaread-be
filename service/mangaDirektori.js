const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const rows = await db.query(
    `SELECT id, judul, penulis, penerbit, tanggal_rilis, rating, jumlah_volume, url_baca
    FROM manga`
  );
  const data = helper.CekRow(rows);

  return {
    data,
  };
}

module.exports = {
  getMultiple,
};
