# O que é o React?

[React](https://reactjs.org) é uma biblioteca criada em JavaScript usada para criar _user interface_ (UI). Atualmente, 2020, existem outras bibliotecas/_frameworks_ que são muito utilizados também, como o [Angular](https://angular.io/) e o [Vue.js](https://vuejs.org/).

## Quais são as vantagens do React?

- **Componentização**: você pode criar um componente, que pode ser uma parte da interface, e reutilizá-lo em várias partes da sua aplicação.
- **Multiplataforma**: você pode usá-lo para criar aplicações web, _mobile_, programas de computador e realidade virtual.

## Como começar?

1. Instale [Node.js](https://nodejs.org/en/), que é um _runtime_ do JavaScript. Recomendamos [este passo a passo](https://github.com/nvm-sh/nvm).

2. Para verificar se o [Node.js](https://nodejs.org/en/) foi instalado com sucesso, execute o comando `node -v` no seu terminal. Se você viu a versão, quer dizer que foi instalado com sucesso.

3. Instale um outro gerenciador de pacotes chamado [Yarn v1](https://classic.yarnpkg.com/lang/en/) seguindo [este passo a passo](https://classic.yarnpkg.com/en/docs/install). Neste projeto, usamos uma estutura de pastas que necessita do [Yarn v1](https://classic.yarnpkg.com/lang/en/) para funcionar. Vamos falar mais disso em outro momento :wink:

4. Faça o clone deste repositório seguindo [este passo a passo do git clone](/paths/git).

5. Entre na pasta raiz do projeto com o comando `cd dev-school` e execute o comando `yarn install` para instalar todos os pacotes necessários.

6. Entre na pasta do site com o comando `cd packages/website`.

7. Rode `yarn run dev`.

8. Parabéns, você rodou localmente um projeto usando React :tada:

## Criando o seu primeiro componente.

Para criar o primeiro componente, vamos criar um arquivo que vai ser uma página que você vai criar sobre você, seja para falar das suas aspirações profissionais, passatempos, dicas ou qualquer outra paixão que você possuir.

O primeiro passo é criar um arquivo com o seu nome de usuário na pasta `packages/website/pages/devs`. Este nome vai ser usado para acessar a sua página no site do Dev School. Por exemplo, se você criar o arqivo `arantespp.tsx`, esta página será visível na URL https://devschool.ttoss.dev/devs/arantespp. A extensão `.tsx` quer dizer que o arquivo é TypeScript (veremos isso posteriormente :wink:).

### Módulo de um componente React

Todo arquivo que define um componente em React tem as seguintes características:

1. Ele é um arquivo JavaScript, então todas as regras de código JavaScript se aplica neste arquivo.

2. As funções podem retornar elementos de HTML. Isso mesmo, funções JavaScript retornam elementos de HTML para que sejam renderizados nas páginas. Por exemplo:

```tsx
const MyComponent = () => {
  return (
    <div>
      <p>Esta é uma função que retorna um elemento de HTML.</p>
    </div>
  );
};
```

3. O arquivo exporta uma função por _default_. Está função vai ser usada para renderizar o seu componente. Ou seja, depois de criar a sua função, vamos chamá-la de `MyComponent`, você tem que exportá-la desta maneira:

```tsx
export default MyComponent;
```

### Criando o seu componente.

Como exemplo, você pode ver os arquivos que existem [nesta pasta](https://github.com/ttoss/dev-school/tree/main/packages/webiste/pages/devs) como exemplo e criar o seu. Para acessar a sua página, lembre-se de executar o projeto com `yarn run dev` e acessar a URL http://localhost:3000/devs/SEU_USUARIO.

Se você viu no navegador o que você codificou no seu arquivo, parabéns :tada::tada::tada:, você criou o seu primeiro componente em React.
