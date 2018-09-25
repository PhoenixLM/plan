const Admin = require('./models/admin');
var novo = new Admin({
    username: 'admin',
    password: 'admin'
});
novo.save(); 

const Cliente = require ('./models/cliente');
var novo = new Cliente({
    username: 'cliente',
    password: 'cliente'
});
novo.save();