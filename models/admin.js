const db     = require('./db')
const bcrypt = require('bcrypt')
const config = require('config')
const Schema = db.Schema

const _SALT = config.get('Passwords.salt')

adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

adminSchema.pre('save', function (next) {
    var admin = this
    bcrypt.hash(admin.password, _SALT, function (err, hash) {
        if(err) next(err)
        admin.password = hash
        next()
    })
})

adminSchema.statics.authenticate = function(username, password, callback) {
    Admin.findOne({username: username}, function(err, admin) {
        if(err) return callback(err)
        if(!admin) {
            var err = new Error('User not found')
            err.status = 401
            return callback(err)
        }
        bcrypt.compare(password, admin.password, function(err, result) {
            if (err) return callback(err)
            if (result === true) return callback(null, admin)
            return callback()
        })
    })
}

const Admin = db.model('admins', adminSchema)
module.exports = Admin
