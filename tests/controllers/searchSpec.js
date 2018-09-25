/*
    Arquivo: controllers/search.js
    Tipo: JavaScript
    Descrição:
        Esse arquivo deve fornecer rotas de busca para a coleção imovels
        Rotas: 
            '/search/vendas/:proc&:tipo&:bairro&:valor'
                Retorna imovéis onde isVenda = true, procedencia = :proc,
                tipo = :tipo, bairro = :bairro e valor <= :valor. O valor
                "null" (STRING) deve ser considerado como wildcard no parametro
                específico, e.g. null&apartamento&asanorte&null retorna
                todas as procedencias e todos os preços para apartamentos
                na asa norte

            '/search/vendas/destaques'
                Retorna imóveis onde isVenda = true e isDestaque = true

            '/search/vendas/oportunidades'
                Retorna imóveis onde isVenda = true e isOportunidade = true
            
            '/search/alugueis/:tipo&:bairro&:valor'
                Retorna imovéis onde isVenda = false,
                tipo = :tipo, bairro = :bairro e valor <= :valor
                O valor "null" (STRING) deve ser considerado como wildcard 
                no parametro específico, e.g. null&apartamento&asanorte&null 
                retorna todas as procedencias e todos os preços para apartamentos
                na asa norte
*/