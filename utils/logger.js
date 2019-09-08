//  Logger Middleware for all routes
//  Logs: methode and path (url)
module.exports = (req, res, next) => {
  console.log('LOGGER: ' + req.method + ' request at ' + req.path);
  next();
};
