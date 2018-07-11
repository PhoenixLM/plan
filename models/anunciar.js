const db     = require('./db')
const rimraf = require('rimraf')
const Schema = db.Schema

anunciarSchema = new Schema({
    id_anunciar: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    numero1: {
        type: Number,
        required: true
    },
    numero2: {
        type: Number,
        required: false
    },
    CEP: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    isLocacao:{
        type: Boolean,
        required: true
    }
})


const Anunciar = db.model('anunciar', anunciarSchema)
module.exports = Anunciar
