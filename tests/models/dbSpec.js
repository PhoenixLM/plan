/*
    Arquivo: models/db.js
    Tipo: Javascript
    Descrição:
        O arquivo deve realizar a conexão com o banco de dados Mongo, com nome
        do banco, endereço e portas definidas no arquivo de configuração do sistema.
        O formato do arquivo de configuração fica definido como tal:

            "Mongo": {
            "host": "localhost",
            "port": "27017",
            "db"  : "test",
            "user": "",
            "pswd": ""
        }

        O sistema de configuração altera automáticamente as configurações acima quando
        em ambiente de teste ou de produção, de maneira que fica delegado a esse arquivo
        somente a tarefa de se conectar segundo o module "config" especifica

*/