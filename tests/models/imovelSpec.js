/*
    Arquivo: models/imovel.js
    Tipo: JavaScript
    Descrição:
        O arquivo deve modelar um documento "imovel" a ser inserido em uma
        coleção "imovels" de um banco de dados Mongo, utilisando a conexão
        definida em models/db.js (ver tests/models/dbSpec.js). A Schema do
        documento fica definida como tal:
        cep: {                 Cep do imóvel
            type: String,
            required: true
        },
        endereco: {            Endereço do imóvel
            type: String,
            required: true
        },
        valor: {               Valor do imóvel
            type: Number,
            required: true
        },
        condominio: {          Valor do condomínio, quando aplicável
            type: Number,
            required: false
        },
        iptu: {                Valor do IPTU, quando aplicável
            type: Number,
            required: false
        },
        isVenda: {             Se o imóvel está alocado para venda valor recebe
            type: Boolean,     true, se alocado para aluguel valor deve receber
            required: true     false
        },
        tipo: {                Tipo do imóvel, e.g. Apartamento, Casa, Terreno etc.
            type: String,      ver anexo da documentação para todos os tipos permitidos
            required: true
        },
        procedencia: {         Se o ímovel é em construção, novo primeira venda ou novo
            type: String,      revenda. Os valores aceitos devem ser "construcao", "novo"
            required: true     e "revenda", respectivamente
        },
        bairro: {              Bairro onde o imóvel se encontra, referir a anexo da documen
            type: String,      tação para lista de valores aceitos
            required: true
        },
        mPrivativo: {          Área privativa em metros quadrados do imóvel, 
            type: Number,      quando aplicável
            required: false
        },
        mTotal: {              Área total em metros quadrados do imóvel
            type: Number,
            required: false
        },
        dormitorios: {         Quantidade de dormitórios, quando aplicável
            type: Number,
            required: false
        },
        suites: {              Quantidade de suítes, quando aplicável
            type: Number,
            required: false
        },
        banheiros: {           Quantidade de banheiros, quando aplicável
            type: Number,
            required: false
        },
        vagas: {               Quantidade de vagas, quando aplicável
            type: Number,
            required: false
        },
        isDestaque: {          Recebe true quando este anúncio se encontra
            type: Boolean,     na lista de destaques
            required: true
        },
        isOportunidade: {      Recebe true quando este imóvel se encontra na 
            type: Boolean,     lista de oportunidades
            required: true
        }

        O arquivo deve também implementar um mongoose post hook de maneira que no
        ato da remoção do documento, também seja deletada a pasta relevante em public/img
*/