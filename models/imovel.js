const db       = require('./db')
const rimraf   = require('rimraf')
const Schema   = db.Schema

const imovelSchema = new Schema({
    cep: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    condominio: {
        type: Number,
        required: false
    },
    iptu: {
        type: Number,
        required: false
    },
    isVenda: {
        type: Boolean,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    procedencia: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    mPrivativo: {
        type: Number,
        required: false
    },
    mTotal: {
        type: Number,
        required: false
    },
    dormitorios: {
        type: Number,
        required: false
    },
    suites: {
        type: Number,
        required: false
    },
    banheiros: {
        type: Number,
        required: false
    },
    vagas: {
        type: Number,
        required: false
    },
    isDestaque: {
        type: Boolean,
        required: true
    },
    isOportunidade: {
        type: Boolean,
        required: true
    },
    isResidencial:{
        type: Boolean,
        required: false
    },
    tipo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: false
    },
    titulo:{
        type: String,
        required: true
    }

})

imovelSchema.post('remove', function(imovel) {
    let path = './public/img/' + imovel._id
    rimraf(path, (err) => {
        console.log('Deletado: ' + path)
    })
});

const Imovel = db.model('imovels', imovelSchema)
module.exports = Imovel