const express = require("express");
const router = express.Router();
const mangaDirektori = require("../service/mangaDirektori");
const { body, validationResult } = require("express-validator");

const multer = require("multer");
// const upload = multer({ dest: 'uploads/' }) // definisikan folder tujuan upload disini

const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

/* GET Manga */
router.get("/", async function (req, res, next) {
  try {
    res.json(await mangaDirektori.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error mengambil data Manga `, err.message);
    next(err);
  }
});

router.post(
  "/",
  upload.single("file_komik"), // replace with the actual field name used for file upload
  [
    body().custom((value, { req }) => {
      const allowedMimeTypes = ["application/pdf", "image/png"];

      if (!allowedMimeTypes.includes(req.file.mimetype)) {
        throw new Error("File harus berupa PDF atau PNG");
      }

      const maxSizeInBytes = 15000000;
      if (req.file.size > maxSizeInBytes) {
        throw new Error(
          `File harus kurang dari ${maxSizeInBytes / 1000000} MB`
        );
      }

      return true;
    }),
  ],
  async function (req, res, next) {
    // Check for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      res.json(await mangaDirektori.create(req.body, req.file));
    } catch (err) {
      console.error(`Error membuat data manga`, err.message);
      next(err);
    }
  }
);

router.put(
  "/:id",
  upload.single("file_komik"), // replace with the actual field name used for file upload
  [
    body().custom((value, { req }) => {
      const allowedMimeTypes = ["application/pdf", "image/png"];

      if (!allowedMimeTypes.includes(req.file.mimetype)) {
        throw new Error("File harus berupa PDF atau PNG");
      }

      const maxSizeInBytes = 15000000;
      if (req.file.size > maxSizeInBytes) {
        throw new Error(
          `File harus kurang dari ${maxSizeInBytes / 1000000} MB`
        );
      }

      return true;
    }),
  ],
  async function (req, res, next) {
    // Check for validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      res.json(await mangaDirektori.update(req.params.id, req.body, req.file));
    } catch (err) {
      console.error(`Error Update data manga`, err.message);
      next(err);
    }
  }
);

router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await mangaDirektori.remove(req.params.id));
  } catch (err) {
    console.error(`Error saat menghapus manga`, err.message);
    next(err);
  }
});

module.exports = router;
