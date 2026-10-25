import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Livro } from '../types/Livro';

interface LivroItemProps {
  livro: Livro;
  onAlternarLido: (id: string) => void;
  onExcluir: (id: string) => void;
}

export default function LivroItem({ livro, onAlternarLido, onExcluir }: LivroItemProps) {
  return (
    <View style={[styles.card, livro.lido && styles.cardLido]}>
      <View style={styles.info}>
        <Text style={[styles.titulo, livro.lido && styles.tituloLido]}>{livro.titulo}</Text>
        <Text style={styles.detalhe}>{livro.autor}</Text>
        <View style={styles.linhaTags}>
          <Text style={styles.genero}>{livro.genero}</Text>
          <Text style={[styles.status, livro.lido ? styles.statusLido : styles.statusPendente]}>
            {livro.lido ? 'Lido' : 'Não lido'}
          </Text>
        </View>
      </View>

      <View style={styles.acoes}>
        <Pressable style={styles.botaoLido} onPress={() => onAlternarLido(livro.id)}>
          <Text style={styles.botaoLidoTexto}>{livro.lido ? 'Desmarcar' : 'Marcar lido'}</Text>
        </Pressable>
        <Pressable style={styles.botaoExcluir} onPress={() => onExcluir(livro.id)}>
          <Text style={styles.botaoExcluirTexto}>Excluir</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 10,
    padding: 14,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#C9A27E',
  },
  cardLido: {
    borderLeftColor: '#4C8C4A',
    backgroundColor: '#F4F9F3',
  },
  info: {
    flex: 1,
    marginRight: 8,
  },
  titulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3B2418',
  },
  tituloLido: {
    color: '#4C6B4A',
  },
  detalhe: {
    fontSize: 14,
    color: '#6E5A4C',
    marginTop: 2,
  },
  linhaTags: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 6,
  },
  genero: {
    fontSize: 12,
    color: '#5B3A29',
    backgroundColor: '#F1E4D6',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  status: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  statusLido: {
    color: '#FFFFFF',
    backgroundColor: '#4C8C4A',
  },
  statusPendente: {
    color: '#7A5A00',
    backgroundColor: '#FBEFC9',
  },
  acoes: {
    justifyContent: 'center',
    gap: 6,
  },
  botaoLido: {
    backgroundColor: '#8B5E3C',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoLidoTexto: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  botaoExcluir: {
    borderWidth: 1,
    borderColor: '#B3261E',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoExcluirTexto: {
    color: '#B3261E',
    fontSize: 13,
    fontWeight: '600',
  },
});
