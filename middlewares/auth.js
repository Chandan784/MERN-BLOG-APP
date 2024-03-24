const { getUser } = require("../services/auth");

let restrictToLoginUserOnly = async (req, res, next) => {
    console.log(req);
  const userid = req.cookie.uid;

  if (!userid) return res.redirect("/login");

  const user = getUser(userid);
  if (!user) if (!userid) return res.redirect("/login");

  req.user = user;

  next();
};

module.exports = { restrictToLoginUserOnly };
