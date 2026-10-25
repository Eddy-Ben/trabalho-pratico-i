// Formato de cada livro guardado na biblioteca
export interface Livro {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  lido: boolean;
}

// Dados que o formulário entrega para o App (o id e o status são definidos no cadastro)
export type NovoLivro = Pick<Livro, 'titulo' | 'autor' | 'genero'>;
