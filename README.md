# Desafio Sesatech

Esse é um projeto de teste técnico proposto pela Sesatech. O teste em si é simples: desenvolver o server-side de um sistema de login + CRUD. 

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/devgustavovasquez/challenge-sesatech.git
```

Entre no diretório do projeto

```bash
  cd challenge-sesatech
```

Inicialize usando o docker-compose

```bash
  docker compose up -d
```

#### ATENÇÃO: Reinicie apenas a aplicação para rodar as migrations e seeders.


Use as rotas no Postman para testar a aplicação no endereço abaixo (o Postman Collection está na raiz do projeto)

```bash
  http://localhost:8080
```


## Observações

O arquivo .env.example teria menos informações em um projeto real.

No processo de desenvolvimento, tive um problema ao usar "datetime" com OracleDB + ORM do Adonis. Caso queira ver o proble, o commit que o contém é: 985c2e2.
Issue correlacionada: [#827](https://github.com/adonisjs/lucid/issues/827) do Lucid.

As aplicações foram construidas usando TypeScript, Adonis e PostgreSQL (segui com esse banco a fim de concluir o projeto).

Destaco que estive atuando pela primeira vez com o framework e estou contente com o resultado. Pude aplicar padrões e técnicas que utilizo no ExpressJS e no NestJS com muita velocidade no Adonis.

A respeito da escolha de tecnologias, segui ao máximo o que é recomendado pelo Adonis. Acredito que o ideal ao lidar com uma nova tecnologia é passar por toda a documentação dela, e foi exatamente o que eu fiz durante o processo de desenvolvimento.