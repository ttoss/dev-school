# O que é o Git?

Git é um sistema de versionamento de arquivos. No nosso caso, usamos para versionar os códigos das aplicações que desenvolvemos. Por exemplo, usamos o Git para versionar os arquivos deste site junto com o [GitHub](www.github.com) para hospedá-los em um servidor na nuvem.

## O que é o GitHub?

O [GitHub](www.github.com) é uma plataforma freemium mundialmente usada para hospedar repositórios que usam Git como sistema de versionamento.

## Como eu começo a usar o Git?

Podemos começar clonando um repositório de algum servidor na qual temos acesso. Como exemplo, vamos usar o próprio código do Dev School, cujo servidor remoto é o GitHub, para fazermos o clone.

O primeiro passo é instalar o Git no seu computador seguindo [este passo a passo](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git#:~:text=H%C3%A1%20tamb%C3%A9m%20algumas%20maneiras%20de,e%20o%20download%20come%C3%A7ar%C3%A1%20automaticamente.).

O segundo passo é clonar o repositório do Dev School com este comando:

```
git clone https://github.com/ttoss/dev-school.git
```

Para confirmar se tudo deu certo, confira se existe o seguinte diretório a partir do diretório que você fez o clone:

```
dev-school/packages/webiste/pages/paths/git.md
```

Se existir, parabéns, você executou com sucesso o seu primeiro comando do Git :tada::tada:
