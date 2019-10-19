// This is middleware for blocks routes if a user not logged in
module.exports = function(req, res, next) {
    // If the user is logged in, continue with routes
    if (req.user) {
      return next();
    }
  
    // Rediret to login if not logged in
    return res.redirect("/");
  };
  