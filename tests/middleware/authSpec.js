/*
    Arquivo: middleware/auth.js
    Tipo: JavaScript
    Descrição:
        O arquivo deve implemetar um middlware que verifica se existe um 
        id válido no cookie 'sessions' de nome 'userId'. Se presente, retorna
        o próximo middlware (next) silenciosamente, se ausente, retorna o proximo
        middleware com o erro de número 401 (Not Authorized)
*/