import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function Servico() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Serviços</Text>
      <Text style={styles.descricao}>
        Nessa página você pode ver todos os serviços solicitados.
      </Text>
    </View>
  );
}
