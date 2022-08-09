const con = require("../../database/db");

exports.home = (req, res) => {
  try {
    con.query("select * from user", (err, alluser) => {
      if (err) throw err;
      if (alluser.length < 0) {
        res.send("user Not Founds");
      } else {
        res.send(alluser);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.insert = (req, res) => {
  try {
    const { name, username, password } = req.body;
    con.query(
      "insert into user set name=?,username=?,password=?",
      [name, username, password],
      (err, data) => {
        if (err) throw err;
        if (data.length < 0) {
          res.send("user Not inserted");
        } else {
          res.send("user inserted succesfully");
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.update = (req, res) => {
  try {
    const { name, username, password } = req.body;
    if (
      (req.body,
      name == null && req.body.username == null && req.body.password == null)
    ) {
      res.send("felid cant be empty");
    } else {
      con.query(
        "update user set name=?,username=?,password=? where id=?",
        [name, username, password, req.params.id],
        (err, upedata) => {
          if (err) throw err;
          if (upedata.length < 0) {
            res.send("user Not updated");
          } else {
            res.send("user updated succesfully");
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
  }
};

exports.delete = (req, res) => {
  try {
    con.query(
      "delete from user where id=?",
      [req.params.id],
      (err, deldata) => {
        if (err) throw err;
        if (deldata.length < 0) {
          res.send("user Not deleted");
        } else {
          res.send("user deleted succesfully");
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
