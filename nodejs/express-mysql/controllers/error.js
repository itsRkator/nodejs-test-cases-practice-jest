const notFoundError = (req, res, next) => {
  res.render("404", {
    pageTitle: "Not Found",
    path: "/error-page",
    formsCss: false,
    productCss: false,
  });
};

module.exports = { notFoundError };
