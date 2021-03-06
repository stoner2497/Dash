const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();
const port = 5000;
const cors = require('cors');
//connecting mongo db
//
mongoose.Promise = global.Promise;
//connect to mongoose

// DB Config
const db = require("./config/keys").mongoURI;

// // Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// //passport initializing
app.use(passport.initialize());

//cors
app.use(cors());



// //config passport
require("./config/passport")(passport);

//middleware for body parser
app.use(bodyParser.urlencoded({ extended: false }));

//parse application json
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
//applying routes
const Auth = require("./routes/Auth");
app.use("/", Auth,);


// app.use(timeout('5s'))

app.listen(port, () => {
  console.log(`server is up and runing on ${port} `);
});
