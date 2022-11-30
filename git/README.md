# Bootcamp Orange Tech

## Git

### O que é o Git?

Git é um software de versionamento, criado para organizar as diferentes versões de um projeto de um forma segura utilizando SHA1 como codificação das informações para realizar comparações.

### Configurações Gerais

``git config --global user.email "email@email.com"``
- Define de forma global nas configurações do git, qual o email do usuário que irá realizar o versionamento.

``git config --global user.name "Nome"``
- Define de forma global nas configurações do git, qual o nome do usuário que irá realizar o versionamento.

### Utilização


``git status``
- Verifica o status atual 

``git init``
- Inicia um repositório no diretório atual, criando a a pasta .git dentro do projeto.

``git add *``
- Adiciona todos os arquivos modificados do projeto ao stage.

``git commit -m "Exemplo de commit."``
- Realiza o comite dos arquivos em stage.
