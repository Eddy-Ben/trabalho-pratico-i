# Minha Biblioteca

Trabalho prático da disciplina de Desenvolvimento para Dispositivos Móveis. É um app em React Native com TypeScript para cadastrar os livros que eu tenho e marcar quais já li.

Tema escolhido: 4, Minha biblioteca.

## O que o app faz

- Cadastra livros com título, autor e gênero. Os três campos são obrigatórios, e o app avisa se algum ficar vazio.
- Lista os livros cadastrados numa FlatList, com o mais recente no topo.
- Marca e desmarca um livro como lido.
- Exclui livros da lista.
- Mostra no topo quantos livros estão cadastrados, quantos foram lidos e quantos faltam.

Os dados ficam só em memória (useState). Ao fechar o app eles somem, o que o enunciado permite.

## Estrutura

```
trabalho-pratico-i/
├── App.tsx                    componente principal, guarda a lista e as funções
├── index.ts                   ponto de entrada do Expo
└── src/
    ├── types/
    │   └── Livro.ts           tipo Livro e NovoLivro
    └── components/
        ├── Header.tsx         título do app e contadores
        ├── LivroForm.tsx      formulário com validação
        └── LivroItem.tsx      card de cada livro, com os botões de lido e excluir
```

O App.tsx guarda o estado e passa por props os dados e as funções `onAdicionar`, `onAlternarLido` e `onExcluir` para os componentes filhos.

## Como rodar

Precisa do Node instalado e do app Expo Go no celular (ou de um emulador).

```bash
npm install
npx expo install --fix
npx expo start
```

Depois é só ler o QR code com o Expo Go.
