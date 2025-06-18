import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MeusServicos() {
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      const dados = await AsyncStorage.getItem("agendamentos");
      const lista = dados ? JSON.parse(dados) : [];
      setServicos(lista);
    };
    carregar();
  }, []);

  const aceitarServico = (servico) => {
    // Aqui você pode salvar em outra lista, marcar como aceito, etc.
    alert(`Serviço aceito: ${servico.servico}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos os Serviços</Text>

      <FlatList
        data={servicos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.servico}>{item.servico}</Text>
            <Text>Local: {item.local}</Text>
            <Text>Data: {item.data}</Text>
            <Text>Hora: {item.hora}</Text>
            <Text>Orçamento: {item.orcamento}</Text>
            <Text style={{ fontStyle: 'italic', marginTop: 4 }}>
              Cadastrado por: <Text style={{ fontWeight: 'bold' }}>{item.usuario}</Text>
            </Text>

            <TouchableOpacity
              style={styles.botaoAceitar}
              onPress={() => aceitarServico(item)}
            >
              <Text style={styles.textoBotao}>ACEITAR</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  servico: { fontWeight: 'bold', fontSize: 16, marginBottom: 6 },
  botaoAceitar: {
    marginTop: 12,
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
