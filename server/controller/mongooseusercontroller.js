const userDB = require("../model/usemodel");

exports.view = (req, res) => {
  userDB
    .find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send("users not found");
    });
};

exports.adduser = (req, res) => {
  if (!req.body) {
    res.status(400).send("field cant be empty");
  }

  const User = new userDB({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  });
  User.save(User)
    .then((data) => {
      res.status(200).send("data inserted!...");
      res.redirect("/");
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.upeuser = (req, res) => {
  if (!req.body) {
    res.status(400).send("field cant be empty");
  }
  userDB
    .findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
    .then((data) => {
      res.status(200).send("user updated successfuly!..");
    })
    .catch((err) => {
      res.status(400).send("eror in update");
    });
};

exports.deluser = (req, res) => {
  userDB
    .findByIdAndDelete(req.params.id)
    .then((data) => {
      res.status(200).send("user deleted succesfully");
    })
    .catch((err) => {
      res.status(400).send("error in user delete");
    });
};
