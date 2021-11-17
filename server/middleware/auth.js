const adminAuthoritation = (req, res, next) => {
    if(req.user && req.user.isAdmin) next()
    else res.sendStatus(401)
}

module.exports = { adminAuthoritation }