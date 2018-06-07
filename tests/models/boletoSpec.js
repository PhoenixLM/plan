/*
    Arquivo: models/boleto.js
    Tipo: JavaScript
    Descrição:
        O arquivo deve modelar um documento "boleto" a ser inserido em uma
        coleção "boletos" de um banco de dados Mongo, utilizando a conexão
        definida em models/db.js (ver tests/models/dbSpec.js). A Schema do
        documento fica definida como tal:
        id_cliente: {           id do cliente que irá acessar o boleto
            type: String,
            required: true
        },
        descricao: {            campo referente a descrição do boleto
            type: String,
            required: true
        },
        vencimento: {           data de vencimento do boleto
            type: String,
            required: true
        },
        valor: {                valor do boleto
            type: Number,
            required: true
        }

        O arquivo deve também implementar um mongoose post hook de maneira que no
        ato da remoção do boleto do sistema, também seja deletada a pasta relevante
        em public/boletos
*/