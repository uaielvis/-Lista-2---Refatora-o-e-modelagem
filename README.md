# -Lista-2---Refatora-o-e-modelagem
1. Modelagem UML do Sistema Original:
Aqui está o diagrama UML do sistema original, com os padrões de projeto aplicados:
Neste diagrama:
•	Contato: Representa um contato com nome, telefone e email.
•	ContatoAdapter: Adapta a interface do Contato para ser compatível com o GerenciadorContatos.
•	GerenciadorContatos: Gerencia uma lista de contatos e oferece métodos para adicionar, remover, listar e buscar contatos.
•	BuscaPorNomeStrategy: Implementa a estratégia de busca por nome.
![image](https://github.com/uaielvis/-Lista-2---Refatora-o-e-modelagem/assets/86741536/60b2051b-f326-4a32-b9bc-4f1bd9ec950c)

2. Aplicação de Princípios SOLID:
Vou aplicar três princípios SOLID no sistema:
a. Princípio da Responsabilidade Única (SRP):
•	Justificativa: Atualmente, o ContatoAdapter tem duas responsabilidades: adaptar a interface do Contato e interagir com o GerenciadorContatos. Separar essas responsabilidades tornará o código mais coeso e fácil de entender.
•	Refatoração: Criar uma nova classe chamada ContatoManager para gerenciar a interação com os contatos, enquanto o ContatoAdapter ficará responsável apenas pela adaptação da interface.
b. Princípio Aberto/Fechado (OCP):
•	Justificativa: Atualmente, a adição e remoção de contatos estão diretamente ligadas à estrutura do GerenciadorContatos. Abstrair essas operações permitirá estender o sistema sem modificar o código existente.
•	Refatoração: Criar interfaces IAdicionavel e IRemovivel para abstrair as operações de adição e remoção de contatos, permitindo extensões futuras.
c. Princípio da Inversão de Dependência (DIP):
•	Justificativa: Atualmente, o GerenciadorContatos depende diretamente do ContatoAdapter. Inverter essa dependência permitirá que o GerenciadorContatos dependa apenas de abstrações, não de implementações concretas.
•	Refatoração: Modificar o GerenciadorContatos para depender das interfaces IAdicionavel e IRemovivel, em vez do ContatoAdapter.

 ![image](https://github.com/uaielvis/-Lista-2---Refatora-o-e-modelagem/assets/86741536/0489356b-d373-499f-8eaa-70be6542d09c)

3. Documentação:
As refatorações propostas visam tornar o sistema mais flexível, coeso e fácil de estender. Ao separar as responsabilidades, abstrair as operações e inverter dependências, estamos seguindo os princípios SOLID, o que resultará em um código mais robusto e de fácil manutenção.
O diagrama UML reflete a estrutura original do sistema, com as classes e suas relações. As refatorações propostas não alteram drasticamente a estrutura do diagrama, mas sim melhoram a organização e a flexibilidade do código.

