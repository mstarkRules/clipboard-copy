let express = require("express");
const path = require("path");

const port = process.env.PORT | 3000;

let app = express();
app.use(express.static("dist"));

app.get("*", (req, res) => res.sendFile(path.resolve("dist", "index.html")));

app.listen(port, "0.0.0.0", function () {
  console.log("Servidor iniciado na porta", port);
});
