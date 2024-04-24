class ContatoManager {
    constructor() {
        this.contatos = [];
    }

    adicionarContato(adicionavel) {
        this.contatos.push(adicionavel);
        console.log(`Contato adicionado com sucesso.`);
    }

    removerContato(removivel) {
        removivel.remover(this.contatos);
        console.log(`Contato removido com sucesso.`);
    }

    listarContatos() {
        console.log("Lista de contatos:");
        if (this.contatos.length > 0) {
            this.contatos.forEach(contato => {
                console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
            });
        } else {
            console.log("Nenhum contato encontrado.");
        }
    }

    buscarContatos(strategy, nome) {
        const resultadosBusca = strategy.buscar(this.contatos, nome);
        return resultadosBusca;
    }
}

module.exports = ContatoManager;