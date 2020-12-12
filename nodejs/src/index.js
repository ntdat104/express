const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

//* Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//* Cấu hình static files
app.use(express.static(path.join(__dirname, "public")));

//* Views template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//* Routes
const indexRouter = require("./routes/index.router");
const loginRouter = require("./routes/login.router");

app.use("/", indexRouter);

app.use("/login", loginRouter);

app.listen(PORT, () =>
	console.log(`Server đang chạy trên: http://localhost:${3000}`)
);
