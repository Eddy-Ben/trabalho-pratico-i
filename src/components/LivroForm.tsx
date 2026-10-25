import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { NovoLivro } from '../types/Livro';

interface LivroFormProps {
  onAdicionar: (livro: NovoLivro) => void;
}

export default function LivroForm({ onAdicionar }: LivroFormProps) {
  const [titulo, setTitulo] = useState<string>('');
  const [autor, setAutor] = useState<string>('');
  const [genero, setGenero] = useState<string>('');
  const [erro, setErro] = useState<string>('');

  function handleSalvar() {
    // Todos os campos são obrigatórios
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      setErro('Preencha título, autor e gênero antes de salvar.');
      return;
    }

    onAdicionar({
      titulo: titulo.trim(),
      autor: autor.trim(),
      genero: genero.trim(),
    });

    setTitulo('');
    setAutor('');
    setGenero('');
    setErro('');
  }

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Título *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: Dom Casmurro"
        value={titulo}
        onChangeText={setTitulo}
      />

      <Text style={styles.label}>Autor *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: Machado de Assis"
        value={autor}
        onChangeText={setAutor}
      />

      <Text style={styles.label}>Gênero *</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: Romance"
        value={genero}
        onChangeText={setGenero}
      />

      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

      <Pressable
        style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
        onPress={handleSalvar}
      >
        <Text style={styles.botaoTexto}>Adicionar livro</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5B3A29',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D9C7B3',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 15,
    marginBottom: 12,
    backgroundColor: '#FFFCF8',
  },
  erro: {
    color: '#B3261E',
    marginBottom: 10,
    fontSize: 13,
  },
  botao: {
    backgroundColor: '#8B5E3C',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoPressionado: {
    opacity: 0.8,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
