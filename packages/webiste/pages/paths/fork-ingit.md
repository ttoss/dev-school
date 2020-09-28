# O que é o Fork no universo GitHub?

## E por qual motivo eu preciso saber disto?

- "Dar um fork" no GitHub é replicar o que há em um repositório do GitHub para o seu repositório pessoal, com o objetivo de alterar a base de código* e enviar de volta ao repositório original.

- Com a aprovação dos "donos" do repositório original, as suas alterações serão misturadas(_mergeadas_) ao código de onde veio seu _fork_, atingindo o objetivo central de "dar um Fork" em um git repo, que é a contribuição de diversos desenvolvedores em uma base de código.


*= Contribuir para o desenvolvimento de uma base de código, que pode ser um manual, uma documentação e um software ou aplicação(APP).

<img src="https://www.linode.com/docs/development/version-control/how-to-install-git-and-clone-a-github-repository/git-github-workflow-1000w.png" alt="_fork_" style={{
  width: "55%",
}}
/>

[Bifurcar um repositório](https://docs.github.com/pt/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)




Vamos ao passo-a-passo, primeiro, você já tem sua conta no Github? [Faça-a aqui : ](https://github.com/join).

Supondo já ser um membro Git, basta escolher o repositório no qual você quer _bifurcar_

## Realizando um fork 

1. Faça um fork. Dessa forma, você consegue fazer o que quiser com o código.

<img src="https://i.ibb.co/LZR5hDq/fork-git.png" alt="Fork na região em 'Rosa' Github" style={{ width: "55%",
  border:"0",
}}
/>

2. Selecione o repositório da sua conta que vai 'armazenar' o código.

3. Dê um clone do novo repositório, aquele que você acabou de _bifurcar_, com o seguinte comando: 
 `git clone https://github.com/nome-seu/nome-repo.git`

4. Acesse, visualize e faça alterações para então realizar um _push_(**) para o repositório que aponta para a sua conta pessoal, ou seja, que está no seu repositório no Github.

**= `git push --set-upstream origin master`

5. Vá ao repositório original(de onde veio o seu repositório copiado) e faça um Pull Request(método para enviar contribuições a repositórios abertos) apontando para a _branch_(através de cliques) que você fez o push
6. Clique em "Compare accross forks"

Agora, as pessoas envolvidas no repositório irão revisar, discutir e conversar sobre o que você enviou...

Por fim, o gerenciador do repositório aceita seu **Pull Request**, faz um _merge_ no repositório oficial e fecha a **Pull Request**
