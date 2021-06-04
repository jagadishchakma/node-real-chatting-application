// login controller
function loginController(req, res, next) {
  res.render("index", {
    title: "Login Pge",
  });
}

// module exports
module.exports = loginController;
