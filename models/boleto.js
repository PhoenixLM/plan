const db     = require('./db')
const rimraf = require('rimraf')
const Schema = db.Schema

boletoSchema = new Schema({
    id_cliente: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    vencimento: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    }
})

boletoSchema.post('remove', function(boleto) {
    let path = './public/boletos/' + boleto._id
    rimraf(path, (err) => {
        console.log('Deletado: ' + path)
    })
});

const Boleto = db.model('boletos', boletoSchema)
module.exports = Boleto
