import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  total: number;
  lidos: number;
}

export default function Header({ total, lidos }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Biblioteca</Text>
      <Text style={styles.subtitulo}>
        {total === 0
          ? 'Nenhum livro cadastrado ainda'
          : `${total} livro(s) · ${lidos} lido(s) · ${total - lidos} na fila`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5B3A29',
    paddingTop: 56,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  titulo: {
    color: '#FFF8EE',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#E8D5C0',
    fontSize: 14,
    marginTop: 4,
  },
});
