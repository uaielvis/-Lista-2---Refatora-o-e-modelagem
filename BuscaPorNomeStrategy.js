class BuscaStrategy {
    buscar(contatos, nome) {
        throw new Error('Método buscar não implementado');
    }
}

module.exports = BuscaStrategy;

class BuscaPorNomeStrategy {
    buscar(contatos, nome) {
        return contatos.filter(contato => contato.nome.toLowerCase().includes(nome.toLowerCase()));
    }
}

module.exports = BuscaPorNomeStrategy;