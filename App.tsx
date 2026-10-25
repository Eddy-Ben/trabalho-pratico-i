import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Header from './src/components/Header';
import LivroForm from './src/components/LivroForm';
import LivroItem from './src/components/LivroItem';
import { Livro, NovoLivro } from './src/types/Livro';

export default function App() {
  // Os livros ficam só em memória, como o enunciado permite
  const [livros, setLivros] = useState<Livro[]>([]);

  function adicionarLivro(dados: NovoLivro) {
    const novo: Livro = {
      id: Date.now().toString(),
      ...dados,
      lido: false,
    };
    setLivros((atuais) => [novo, ...atuais]);
  }

  function alternarLido(id: string) {
    setLivros((atuais) =>
      atuais.map((livro) => (livro.id === id ? { ...livro, lido: !livro.lido } : livro))
    );
  }

  function excluirLivro(id: string) {
    setLivros((atuais) => atuais.filter((livro) => livro.id !== id));
  }

  const totalLidos = livros.filter((livro) => livro.lido).length;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <>
            <Header total={livros.length} lidos={totalLidos} />
            <LivroForm onAdicionar={adicionarLivro} />
            {livros.length > 0 && <Text style={styles.secao}>Meus livros</Text>}
          </>
        }
        renderItem={({ item }) => (
          <LivroItem livro={item} onAlternarLido={alternarLido} onExcluir={excluirLivro} />
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>Sua estante está vazia. Cadastre o primeiro livro acima.</Text>
        }
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F1EA',
  },
  lista: {
    paddingBottom: 32,
  },
  secao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5B3A29',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  vazio: {
    textAlign: 'center',
    color: '#8C7B6E',
    marginTop: 12,
    marginHorizontal: 32,
    fontSize: 15,
  },
});
