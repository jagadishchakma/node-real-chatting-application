function inboxHomeController(req, res, next) {
  res.render("inbox", {
    title: "Inbox pge",
  });
}
module.exports = inboxHomeController;
