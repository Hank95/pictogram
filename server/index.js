import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import cors from "cors";

const PORT = process.env.PORT || 3001;

const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pictogramDB",
});

app.use(cors());
app.use(express.json());
// require("dotenv").config({ path: __dirname + "/.env" });

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM user_posts";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const image = req.body.image;
  const datePosted = req.body.datePosted;
  const sqlInsert =
    "INSERT INTO user_posts (title, author, image, datePosted) VALUE (?,?,?,?)";
  db.query(sqlInsert, [title, author, image, datePosted], (err, result) => {
    console.log(err, result);
    res.json(result);
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "DELETE FROM user_posts WHERE iduser_posts = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
