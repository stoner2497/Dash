const User = require("../models/User");




exports.register = (req,res) => {
    User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        let text = "user already exist";
        res.status(400).json({ msg: text });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: "200",
          r: "pg",
          d: "mm",
        });
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar: avatar,
          new:true
        });
        console.log(newUser);
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                res.status(200).json(user);
              })
              .catch((err) => console.log(err));
          });
        });
      }
    })
    .catch((err) => {
      res.send(err).status(404).json({ text: "something went wrong" });
    });
}


