<p align="center">
  <img src="https://angular.io/assets/images/logos/angular/angular.png">
</p>
<p align="center">

  <a href="https://www.npmjs.com/@angular/core">
    <img src="https://img.shields.io/badge/npm-v6.14.14-%232fba2f" alt="Angular on npm" />
  </a>&nbsp;
  <a href="https://github.com/scmntc">
    <img alt="Feito pela Otavio Soares" src="https://img.shields.io/badge/Feito%20por-Otavio%20Soares-blueviolet">
  </a>&nbsp;
  <a href="https://material.angular.io/">
    <img src="https://img.shields.io/badge/Prime%20NG-v12.2.0-blue">
  </a>&nbsp;
</p>

# Proagro Fácil

Projeto criado seguindo as especificações passadas para realização do teste.

## Informações

O projeto foi adequado para rodar na plataforma do Heroku, sendo utilizado um servidor node com express para servir a aplicação.

### Tecnologias

Foi utilizado para construção do projeto as seguintes tecnologias (principais):
- Angular 12.2.8
- PrimeNG 12.2.0

### Funcionalidades
- CRUD de Produtores Rurais, com validações de E-mail e CPF.
- CRUD de Comunicação de perda, sendo validado todos os campos na hora da inclusão.
- Filtragem de Comunicação de perda por CPF do Produtor.

</p>

### Pré-requisitos

- Instalar [Node.js] que já inclui [Node Package Manager][npm]

### Rodando o Projeto

Para o funcionamento desta aplicação é necessário subir em conjunto a API que se encontra em: <a href="https://github.com/scmntc/proagro-api">Proagro-API<a/>

Instale o Angular CLI Globalmente:

```
npm install -g @angular/cli
```

Rodando a aplicação:

```
cd angular-project
npm install
ng serve
```

Ao acessar http://localhost:4200, será exibida a tela de login (Somente visual), não sendo necessário informar usuário e senha, basta clicar em Entrar.

Após isso você já será direcionado para a tela de cadastro de Comunicação de Perda, antes de realizar algum cadastro de Comunicação de Perda é necessário primeiro cadastrar o Produtor Rural acessando a opção do menu Cadastros > Produtor Rural.

## 🦸 Autor

<a href="https://www.linkedin.com/in/otavio-augusto-soares-dos-passos-516a5114a/">
 <img style="border-radius: 50%;" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" width="100px;"/>
