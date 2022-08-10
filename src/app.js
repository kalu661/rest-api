const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouts = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000;

// middleware api exported user
app.use(express.json());
app.use("/api", userRouts);

// routes get petitiones
app.get("/", (req, res) => {
	res.send("Send to my API");
});

// conection mongoose uri
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("connected to MongoDB Atlas"))
	.catch((error) => console.error(error));

app.listen(port, () => console.log(`listening on ${port}`));
