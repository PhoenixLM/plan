/*
    Arquivo: models/admin.js
    Tipo: JavaScript
    Descrição:
        Este arquivo deve modelar uma coleção mongo "admins" a partir da conexão
        estabelecida por models/db.js (ver tests/models/dbSpec.js). A Schema desse
        documento fica definida como tal:
            username: {
                type: String,
                required: true,
                unique: true
            },
            password: {
                type: String,
                required: true,
                trim: true
            }
        
        Além disso, este arquivo deve implementar um mongoose hook (também conhecido como mongoose
        middleware) a ser executado sempre logo após um documento ser inserido na coleção, de maneira
        que o campo password seja criptografado por meio de hash utilizando o module bcrypt e salt 
        definida em arquivo de configuração. O formato do arquivo de configuração fica definido como
        tal:
            "Passwords": {
                "salt": <int>
            }
        Uma salt suficientemente segura deve ser fornecida em ambiente de produção, ficando como padrão
        o valor '10' (int)

        Finalmente, o arquivo deve definir um método estático "authenticate" que compara um password de 
        entrada com o password criptografado da coleção, utilizando da função bcrypt "compare"
*/