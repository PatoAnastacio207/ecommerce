const adminAuthoritation = (req, res, next) => {
  if (req.user && req.user.isAdmin) next();
  else return res.sendStatus(401);
};

const adminOrUser = (req, res, next) => {
  if (req.user && (req.user.isAdmin || req.user._id == req.params.id))
    return next();
  else return res.sendStatus(401);
};

module.exports = { adminAuthoritation, adminOrUser };
