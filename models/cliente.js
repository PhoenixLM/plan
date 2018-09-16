const db     = require('./db')
const bcrypt = require('bcrypt')
const config = require('config')
const Schema = db.Schema

const _SALT = config.get('Passwords.salt')

clienteSchema = new Schema({
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

clienteSchema.pre('save', function (next) {
    var cliente = this
    bcrypt.hash(cliente.password, _SALT, function (err, hash) {
        if(err) next(err)
        cliente.password = hash
        next()
    })
})

clienteSchema.statics.authenticate = function(username, password, callback) {
    Cliente.findOne({username: username}, function(err, cliente) {
        if(err) return callback(err)
        if(!cliente) {
            var err = new Error('User not found')
            err.status = 401
            return callback(err)
        }
        bcrypt.compare(password, cliente.password, function(err, result) {
            if (err) return callback(err)
            if (result === true) return callback(null, cliente)
            return callback()
        })
    })
}

const Cliente = db.model('clientes', clienteSchema)
module.exports = Cliente
