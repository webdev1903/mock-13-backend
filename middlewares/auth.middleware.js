module.exports = async (req, res, next) => {
  let temp = req.body.email;
  let x = temp.split("@");
  let obj;
  if (x[1] == "masaischool.com") {
    obj = { ...req.body, type: "admin" };
  } else {
    obj = { ...req.body, type: "user" };
  }
  req.body = obj;
  return next();
};
