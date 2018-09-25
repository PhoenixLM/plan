/*
    Arquivo: custom-express.js
    Tipo: JavaScript
    Descrição:
        Este arquivo deve definir os middlewares a serem utilizados pelo servidor, são eles:
            Express: Framework node express

            Express-load: Autoloader de scripts e modelos, carrega todas as rotas contidas dentro
                da pasta controllers

            Sessions: Define um cookie criptografado para armazenamento de dados referentes a sessão
                do usuário, o arquivo deve definir um cookie de nome "sessao" com as configurações
                do arquivo de configuração segundo tal:
                    "Session": {
                        "secret": <String>,
                        "duration": int
                    }
                O atributo segredo deve ser gerado aleatóriamente e de tamanho suficiente para ser
                seguro em ambiente de produção, a duração do cookie é definida em horas.

            Auth: Middleware de autenticação, ver tests/middleware/authSpec.js para mais informações

            Body-Parser: Middleware que transforma uma request 'url enconded' em um json

            Express-FileUploader: Middleware que possibilita acessar arquivos no body da request

            Express-Validator: Middleware que possibilita validação de dados server-side

        O arquivo deve também configurar a engine de rederização padrão para "ejs" e a pasta 'public/'
        como aberta para requests


 */