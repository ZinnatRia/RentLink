const whitelist = ["http://localhost:3500", "http://localhost:3000"];

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (whitelist.includes(origin) || !origin) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

module.exports = credentials;
