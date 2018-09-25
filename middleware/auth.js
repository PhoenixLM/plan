const Admin = require('../models/admin')

module.exports = (req, res, next) => {
    Admin.findOne({_id: req.sessao.userId}, (err, admin) => {
        if(err) {
            var err = new Error('Internal server error')
            err.status = 500
        }
        else if(!admin) {
            var err = new Error('Not authorized')
            err.status = 401
        }
        return next(err)
    })
}