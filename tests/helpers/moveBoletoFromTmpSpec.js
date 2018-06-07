/*
    Arquivo: helpers/moveImgFromTmp.js
    Tipo: JavaScript
    Descrição:
        O arquivo deve implemetar um helper que recebe um 
        objeto request 'req', um boleto._id e um callback
        operando como tal:
            + Criar uma pasta em public/boletos/ com o nome
                referente ao boleto._id
            + Identificar a pasta dentro de tmp/ que contem
                os arquivos relevantes usando o parametro
                userId do cookie 'sessao'
            + Copiar os arquivos de tmp/ para public/img/boleto._id
                renomeando o arquivo como boleto.pdf
            + Deletar a pasta de tmp/ utilizando o plugin 'rimraf' após
                conclusão das cópias
*/