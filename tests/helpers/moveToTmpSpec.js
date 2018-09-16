/*
    Arquivo: helpers/moveToTmpSpec.js
    Tipo: JavaScript
    Descrição:
        O arquivo deve implemetar um helper que recebe um 
        objeto request 'req' e um callback operando como tal:
            + Cria uma pasta dento de 'tmp/' com nome igual ao
                'userId' gravado no cookie 'sessao'
            + Caso a pasta já exista, falhe silenciosamente
            + O objeto request deve estar carregado com um
                arquivo, utilizar a biblioteca 'express-fileupload'
                para mover o arquivo para a pasta criada anteriormente
            
        Em caso de erro passa-lo para o callback
*/