const adminAuthoritation = (req, res, next) => {
    if(req.user && req.user.isAdmin) next()
    else return res.sendStatus(401)
}

const adminOrUser = (req, res, next) => {
    console.log(req.user)
    console.log(req.user.isAdmin)
    console.log(req.user._id, req.params.id)
    console.log(req.user._id == req.params.id)
    if(req.user && ( req.user.isAdmin || req.user._id == req.params.id)) return next()
    else return res.sendStatus(401)
}

module.exports = { adminAuthoritation, adminOrUser }