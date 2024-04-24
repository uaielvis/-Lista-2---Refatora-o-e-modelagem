const Contato = require('./Contato');
const ContatoManager = require('./ContatoManager');
const CLI = require('./CLI');

// Criando uma instância do gerenciador de contatos
const gerenciadorContatos = new ContatoManager();

// Criando uma instância do CLI e passando o gerenciador de contatos como argumento
const cli = new CLI(gerenciadorContatos);

// Iniciando a interface de linha de comando
cli.iniciar();