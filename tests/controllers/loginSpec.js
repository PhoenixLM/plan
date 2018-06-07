/*
    Arquivo: controllers/login.js
    Tipo: JavaScript
    Descrição:
        O arquivo deve implementar as seguintes rotas:
            (get) /login
                renderiza a página login.ejs com o atributo 'error' 
                de valor 'false'

            (get) /login/logout
                atribuí 'null' ao campo 'userId' do cookie 'sessao' e
                redireciona para a página de login
            
            (post) /login
                recebe username e password dentro de req.body e tenta 
                autenticar o usuário como administrador, em caso de
                sucesso, guarda o id do usuário no cookie 'sessao' sobe
                o parametro 'userId' e redireciona para a página
                admin/painel.
                Caso falhe, é feito uma tentativa de autenticação como
                cliente. Caso sucesso, guarda o id do usuário no cookie
                'sessao' sobe o parametro 'userId' e redireciona para a página
                cliente/painel.
                Caso falhe novamente, renderiza a página 'login' com o atributo
                'error' de valor 'true'
                
*/