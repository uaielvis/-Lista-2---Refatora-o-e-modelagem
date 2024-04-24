const readline = require('readline');
const Contato = require('./Contato');
const BuscaPorNomeStrategy = require('./BuscaPorNomeStrategy');


class CLI {
    constructor(gerenciadorContatos) {
        this.gerenciadorContatos = gerenciadorContatos;
        this.interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    iniciar() {
        console.log('Bem-vindo ao sistema de gerenciamento de contatos.');

        this.interface.question('O que você gostaria de fazer? (adicionar/remover/listar/buscar/sair): ', (resposta) => {
            switch (resposta.toLowerCase()) {
                case 'adicionar':
                    this.adicionarContato();
                    break;
                case 'remover':
                    this.removerContato();
                    break;
                case 'listar':
                    this.listarContatos();
                    break;
                case 'buscar':
                    this.buscarContato();
                    break;
                case 'sair':
                    console.log('Obrigado por usar o sistema. Até mais!');
                    this.interface.close();
                    break;
                default:
                    console.log('Comando inválido.');
                    this.iniciar();
                    break;
            }
        });
    }

    adicionarContato() {
        this.interface.question('Digite o nome do contato: ', (nome) => {
            this.interface.question('Digite o telefone do contato: ', (telefone) => {
                this.interface.question('Digite o email do contato: ', (email) => {
                    const contato = new Contato(nome, telefone, email);
                    this.gerenciadorContatos.adicionarContato(contato);
                    this.iniciar();
                });
            });
        });
    }

    removerContato() {
        this.interface.question('Digite o nome do contato que deseja remover: ', (nome) => {
            const resultadosBusca = this.gerenciadorContatos.buscarContatos(new BuscaPorNomeStrategy(), nome);
            if (resultadosBusca.length > 0) {
                resultadosBusca.forEach(contato => {
                    console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
                });
                this.interface.question('Digite o nome exato do contato que deseja remover: ', (nomeExato) => {
                    const contatoEncontrado = resultadosBusca.find(contato => contato.nome === nomeExato);
                    if (contatoEncontrado) {
                        this.gerenciadorContatos.removerContato(contatoEncontrado);
                        console.log('Contato removido com sucesso.');
                    } else {
                        console.log('Contato não encontrado.');
                    }
                    this.iniciar();
                });
            } else {
                console.log('Nenhum contato encontrado com esse nome.');
                this.iniciar();
            }
        });
    }

    listarContatos() {
        this.gerenciadorContatos.listarContatos();
        this.iniciar();
    }

    buscarContato() {
        this.interface.question('Digite o nome do contato que deseja buscar: ', (nome) => {
            const resultadosBusca = this.gerenciadorContatos.buscarContatos(new BuscaPorNomeStrategy(), nome);
            if (resultadosBusca.length > 0) {
                console.log('Resultados da Busca:');
                resultadosBusca.forEach(contato => {
                    console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, Email: ${contato.email}`);
                });
            } else {
                console.log('Nenhum contato encontrado com esse nome.');
            }
            this.iniciar();
        });
    }
}

module.exports = CLI;