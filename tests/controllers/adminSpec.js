/*
    Arquivo: controllers/admin.js
    Tipo: JavaScript
    Descrição:
        O arquivo deve implementar as seguintes rotas:
            (get) /admin/painel:
                renderiza a página admin/painel.ejs

            (post) /admin/media
                recebe um arquivo a ser armazenado na pasta tmp/.
                Ver (tests/helpers/moveToTmpSpec.js). Se o recebimento
                do arquivo obtever erros, enviar um JSON como tal:
                    {
                        "success":false
                    }
                Isso permite que o plugin de front-end 'fineuploader' possa
                tentar novamente o upload do arquivo em questão. Caso não
                haja erros modificar valor para 'true'.
            
            (post) /admin/uploadBoleto
                recebe um arquivo a ser armazenado na pasta tmp/.
                Ver (tests/helpers/moveBoletoToTmpSpec.js). Se o recebimento
                do arquivo obtever erros, enviar um JSON como tal:
                    {
                        "success":false
                    }
                Isso permite que o plugin de front-end 'fineuploader' possa
                tentar novamente o upload do arquivo em questão. Caso não
                haja erros modificar valor para 'true'.



            (get) /admin/imoveis:
                renderiza a página admin/imoveis.ejs passando para
                a mesma, o array 'imovels' com todos os imovéis cadastra
                dos no banco de dados
            
            (get) /admin/imoveis/search/:id
                renderiza a página admin/imovel.ejs passando para a 
                mesma, a variavel 'imovel' contendo as informações do
                imovel específicado na rota sob 'id'

            (get) /admin/imoveis/new
                renderiza a página admin/imovel-form.ejs

            (post) /admin/imoveis/new
                recebe um form com as informações de um imóvel, instancia
                um novo objeto 'Imovel' (ver tests/models/imovelSpec.js) e
                salva esse objeto no banco de dados. Deve-se então capturar
                os arquivos relevantes ao imovel na pasta tmp/ e move-los
                para public/img/imovel._id (ver tests/helpers/moveImgFromTmpSpec.js).
                Finalmente, redirecionar para /admin/imoveis

            (get) /admin/imoveis/delete/:id
                Remove o documento da coleção 'imovels' de id referente a url

            (post) /admin/imoveis/update/:id
                Atualiza o documento da coleção 'imovels' de id referente a url



            (get) /admin/admins:
                renderiza a página admin/admins.ejs passando para
                a mesma, o array 'admins' com todos os administradores 
                cadastrados no banco de dados
            
            (get) /admin/admins/search/:id
                renderiza a página admin/admin.ejs passando para a 
                mesma, a variavel 'admin' contendo as informações do
                administrador específicado na rota sob 'id'

            (get) /admin/admins/new
                renderiza a página admin/admin-form.ejs

            (post) /admin/admins/new
                recebe um form com as informações de um admin, instancia
                um novo objeto 'Admin' (ver tests/models/adminSpec.js) e
                salva esse objeto no banco de dados. Finalmente, redirecionar
                para /admin/admins

            (get) /admin/admins/delete/:id
                Remove o documento da coleção 'admins' de id referente a url

            (post) /admin/admins/update/:id
                Atualiza o documento da coleção 'admins' de id referente a url



            (get) /admin/clientes:
                renderiza a página admin/clientes.ejs passando para
                a mesma, o array 'clientes' com todos os clientes 
                cadastrados no banco de dados
            
            (get) /admin/clientes/search/:id
                renderiza a página admin/cliente.ejs passando para a 
                mesma, a variavel 'cliente' contendo as informações do
                cliente específicado na rota sob 'id'

            (get) /admin/clientes/new
                renderiza a página admin/cliente-form.ejs

            (post) /admin/clientes/new
                recebe um form com as informações de um cliente, instancia
                um novo objeto 'Cliente' (ver tests/models/clienteSpec.js) e
                salva esse objeto no banco de dados. Finalmente, redirecionar
                para /admin/clientes

            (get) /admin/clientes/delete/:id
                Remove o documento da coleção 'clientes' de id referente a url

            (post) /admin/clientes/update/:id
                Atualiza o documento da coleção 'clientes' de id referente a url



            (get) /admin/boletos:
                renderiza a página admin/boletos.ejs passando para
                a mesma, o array 'boletos' com todos os boletos 
                cadastrados no banco de dados
            
            (get) /admin/boletos/search/:id
                renderiza a página admin/boleto.ejs passando para a 
                mesma, a variavel 'boleto' contendo as informações do
                boleto específicado na rota sob 'id'

            (get) /admin/boletos/new
                renderiza a página admin/boleto-form.ejs

            (post) /admin/boletos/new
                recebe um form com as informações de um cliente, instancia
                um novo objeto 'Boleto' (ver tests/models/boletoSpec.js) e
                salva esse objeto no banco de dados. Finalmente, redirecionar
                para /admin/boletos

            (get) /admin/boletos/delete/:id
                Remove o documento da coleção 'boletos' de id referente a url

            (post) /admin/boletos/update/:id
                Atualiza o documento da coleção 'boletos' de id referente a url

            (get) /admin/boletos/file/:id
                Utilizando o helper nativo do Express, res.download(), é
                possível realizar o download do boleto desejado, localizado na
                pasta /public/boletos/id_do_boleto/boleto.pdf. O id_do_boleto é
                enviado pela rota como 'id'.

            
*/