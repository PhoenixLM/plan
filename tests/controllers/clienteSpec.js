/*
    Arquivo: controllers/cliente.js
    Tipo: JavaScript
    Descrição:
        O arquivo deve implementar as seguintes rotas:
            (get) /cliente/painel:
                renderiza a página cliente/painel.ejs

            (get) /cliente/boletos:
                renderiza a página cliente/boletos.ejs passando para
                a mesma, o array 'boletos' com todos os boletos 
                cadastrados no banco de dados

            (get) /cliente/boletos/file/:id
                Utilizando o helper nativo do Express, res.download(), é
                possível realizar o download do boleto desejado, localizado na
                pasta /public/boletos/id_do_boleto/boleto.pdf. O id_do_boleto é
                enviado pela rota como 'id'.

            
*/