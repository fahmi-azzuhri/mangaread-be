import express from "express";
const app = express();
const port = 2000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.listen(port, () => {
  console.log(`Aplikasi Berjalan di http://localhost:${port}`);
});
