# Instruções do projeto

01 - Clone o projeto usando o comando git clone URL_REPOSITORIO

02 - Navegue ate a pasta do projeto e rode os comandos
```
[npm i]
[npm run dev]
```

03 - Em outro outro terminal, navegue ate a pasta do projeto e rode os comandos
```
[docker-compose build]
[docker-compose up -d]
[docke-compose start]
```
04 - Acesse o [localhost:8000]
Servidor: 192.168.0.1
Usuário: root
Senha: loja
Base de dados: loja

05 - Abre outro terminal, navegue ate a pasta do projeto e rode os comandos
```
[knex migrate:up]
```
Rode esse comando ate criar todas as migrations