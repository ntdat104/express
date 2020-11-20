const express = require("express");
const path = require("path");
const morgan = require("morgan");

const indexRouter = require("./routes/index_router");
const userRouter = require("./routes/user_router");

const app = express();
const port = 3000;

//* Cấu hình static files
app.use(express.static(path.join(__dirname, "public")));

//* HTTP log
// app.use(morgan("combined"));

//* Views template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(port, () =>
	console.log(`Server được chạy trên http://localhost:${port}`)
);
