import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

export default function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [indiceParaExcluir, setIndiceParaExcluir] = useState(null);
  const router = useRouter();

  useEffect(() => {
    carregarAgendamentos();
  }, []);

  const carregarAgendamentos = async () => {
    const dados = await AsyncStorage.getItem('agendamentos');
    if (dados) {
      setAgendamentos(JSON.parse(dados));
    }
  };

  const confirmarExclusao = (index) => {
    setIndiceParaExcluir(index);
    setModalVisible(true);
  };

  const excluirAgendamento = async () => {
    const dados = await AsyncStorage.getItem('agendamentos');
    let lista = dados ? JSON.parse(dados) : [];
    lista.splice(indiceParaExcluir, 1);
    await AsyncStorage.setItem('agendamentos', JSON.stringify(lista));
    setAgendamentos(lista);
    setModalVisible(false);
    setIndiceParaExcluir(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Agendamentos</Text>

      <FlatList
        data={agendamentos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.servico}>{item.servico}</Text>
            <Text>Local: {item.local}</Text>
            <Text>Data: {item.data}</Text>
            <Text>Hora: {item.hora}</Text>
            <Text>Orçamento: {item.orcamento}</Text>

            <View style={{ flexDirection: 'row', marginTop: 10, gap: 10 }}>
              <Button
                title="Editar"
                onPress={() =>
                  router.push(`/perfil/agendamentos/editar?index=${index}`)
                }
              />
              <Button
                title="Excluir"
                color="red"
                onPress={() => confirmarExclusao(index)}
              />
            </View>
          </View>
        )}
      />

      {/* Modal de confirmação */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View
            style={{
              width: '80%',
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              elevation: 5,
              shadowColor: '#000',
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 20 }}>
              Tem certeza que deseja excluir este agendamento?
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 10 }}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
              <Button title="Excluir" color="red" onPress={excluirAgendamento} />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
