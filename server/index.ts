import * as express from "express";
import * as cors from "cors";
import * as path from "path";

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.json();
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(port, () => {
  console.log("Servidor iniciado en el puerto " + port);
});
