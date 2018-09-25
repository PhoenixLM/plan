/*
    Arquivo: helpers/moveImgFromTmp.js
    Tipo: JavaScript
    Descrição:
        O arquivo deve implemetar um helper que recebe um 
        objeto request 'req', um imovel._id e um callback 
        operando como tal:
            + Criar uma pasta em public/img/ com o nome
                referente ao imovel._id
            + Identificar a pasta dentro de tmp/ que contem
                os arquivos relevantes usando o parametro
                userId do cookie 'sessao'
            + Copiar os arquivos de tmp/ para public/img/imovel._id
            + Se identificado um arquivo de nome 'principal.jpg',
                utilizar o plugin 'gm' para criar uma thumbnail de
                200x200 pixels e armazena-la com o nome de 'thumb.jpg'
            + Todos os outros arquivos devem ser nomeados numericamente
                em ordem crescente, começando em '0.jpg'
            + Deletar a pasta de tmp/ utilizando o plugin 'rimraf' após
                conclusão das cópias
*/