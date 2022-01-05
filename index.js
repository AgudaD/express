let express = require("express");
let app = express();
let path = require("path");
app.use(express.static(__dirname + "/public"))
const router = express.Router();

router.use(function (req, res, next) {
  let d = new Date();
  let day = d.getDay();
  if (day === 0 || day === 6) {
    return "We are currently offline, please come back on a week day";
}next();
});

app.get("/", (req, res) => {
    console.log(__dirname);
  res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/services", (req, res) => {
    console.log(req);
    res.sendFile(path.join(__dirname, "services.html"));
  });
  app.get("/contact", (req, res) => {
    console.log(req);
    res.sendFile(path.join(__dirname, "contact.html"));
  });
  
  const port = 3000;
  app.listen(3000, () => {
    console.log("started running");
  });