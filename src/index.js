module.exports = () => {
  return (req, res, next) => {
    var status = req.isAuthenticated() ? 'logged in' : 'logged out';
    console.log(
      'status:', status, '\n',
      req.sessionStore,
      req.sessionID,
      req.session
    );
    next();
  };
};
