# API de Conversão de Moedas

## Contexto

A API de Conversão de Moedas é uma API Node/Typescript que tem como objetivo realizar a conversão de um valor em Real para outras moedas. Para obter a cotação, foi utilizada uma API externa que atualiza o valor das moedas a cada 30 segundos: [https://docs.awesomeapi.com.br/api-de-moedas](https://docs.awesomeapi.com.br/api-de-moedas)

Levando em consideração a proposta do teste, optei por uma estruturação que permitisse facilidade de navegação entre as pastas e arquivos, e que, fosse capaz de suportar implementações futuras sem que a base do projeto ficasse sensível à alterações. Então, para a arquitetura dessa aplicação, me baseei nas minhas últimas experiência com ***Driven Domain Design.***

## Instalação
- Clone esse repositório
- Você irá precisar da seguinte versão do Node: [Node V16.5.0](https://nodejs.org/en/download/) para instalar a API

- Na raiz do repositório você deverá rodar uma das seguinte alternativas:

### Usando Docker
- Se ainda não tiver o Docker instalado, [instale-o](https://docs.docker.com/get-docker/) globalmente
- Após a instalação:

```bash
sudo docker build -t coin-converter .
```

### Usando NPM
```bash
npm install
```

## Ambiente Local

### Usando Docker
```bash
sudo docker run -p 3003:3003 -d coin-converter
```

- Para verificar o container:
```bash
sudo docker ps
```

### Usando Docker
```bash
npm run dev
```

#### Rotas
Quando o servidor estiver rodando, teste as seguintes rotas no seu navegador para verificar o funcionamento da aplicação:

- [Sucesso](http://localhost:3003/convert/529.99)
- [Quantia inválida](http://localhost:3003/convert/0)
- [Valor inválido](http://localhost:3003/convert/testError)
- [Rota inexistente](http://localhost:3003/convert/)

#### Testes
Foram feitos testes unitários e testes de integração nessa aplicação. Para rodar os testes, rode o comando ```npm run test```

#### Lint
Foi utilizado Airbnb Style Guide (+ESLint) para o Linter da aplicação.
Rode o comando ```npm run eslint``` para verificar


## Ambiente de Produção
O deploy da API foi feito pelo Heroku, documentado no Postman e monitorado através do Datadog. Você pode conferir todos esses ambientes da seguinte forma:

#### Heroku
- [Sucesso](https://sbf-coin-convert-test.herokuapp.com/convert/529.99)
- [Quantia inválida](https://sbf-coin-convert-test.herokuapp.com/convert/0)
- [Valor inválido](https://sbf-coin-convert-test.herokuapp.com/convert/testError)
- [Rota inexistente](https://sbf-coin-convert-test.herokuapp.com/convert/)

#### Postman
A documentação https://documenter.getpostman.com/view/24116603/2s8YK6MSWk da API foi feita usando o Postman. Na documentação também é possível verificar o retorno das requests. No campo Example Request é possível verificar escolher a request e a resposta aparecerá no Example Response.

#### Datadog
Para monitorar os ```logs``` da API, foi utilizado o Datadog.
Como foi utilizada a versão de teste do Datadog, o monitoramento só estará no ar durante o período de teste, que termina no dia 08/11/2022. 

#### Instruções de Acesso ao Datadog e Verificação dos Logs
- Acesse [https://app.datadoghq.com/account/login](https://app.datadoghq.com/account/login)
- Selecione `Sign in with Google`
- E use as seguintes credenciais:
    - e-mail: [sbf.coin.convert.test@gmail.com](mailto:sbf.coin.convert.test@gmail.com)
    - senha: COINCONVERTOUT22
- No menu de opções, escolha `Logs`
- Escolha o intervalo de tempo (sugiro olhar os últimos 15 dias) e no campo de busca será possível verificar os Logs gerados pela aplicação.
    - “Conversion successfully”
    - “Client did not sent a numeric value”
    - “Client sent an invalid value”

 Caso este teste não seja revisado até essa data, segue imagens do monitoramento:

 ## Tecnologias Utilizadas
 - Typescript
- Express
- Cors
- Jest
- ESLint
- Datadog
- Postman
- Docker
