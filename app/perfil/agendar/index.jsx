import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import styles from './styles';

export default function Agendar() {
  const { servico } = useLocalSearchParams();
  const router = useRouter();

  const [local, setLocal] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [orcamento, setOrcamento] = useState('');
  const [mensagem, setMensagem] = useState('');

  const formatarMoeda = (valor) => {
    const numeric = valor.replace(/\D/g, '');
    const float = parseFloat(numeric) / 100;
    if (isNaN(float)) return '';
    return float.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleOrcamentoChange = (text) => {
    const formatado = formatarMoeda(text);
    setOrcamento(formatado);
  };

  const confirmarAgendamento = async () => {
    try {
      const usuario = await AsyncStorage.getItem('usuario_logado');

      if (!usuario) {
        setMensagem("Erro: nenhum usuário logado.");
        return;
      }

      const agendamento = {
        usuario,
        servico,
        local,
        data,
        hora,
        orcamento,
      };

      const existentes = await AsyncStorage.getItem('agendamentos');
      const agendamentos = existentes ? JSON.parse(existentes) : [];
      agendamentos.push(agendamento);
      await AsyncStorage.setItem('agendamentos', JSON.stringify(agendamentos));

      setMensagem('Agendamento confirmado com sucesso!');
      setLocal('');
      setData('');
      setHora('');
      setOrcamento('');
    } catch (error) {
      console.error("Erro ao salvar agendamento:", error);
      setMensagem('Ocorreu um erro ao confirmar o agendamento.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar: {servico}</Text>

      <Text style={styles.label}>Local do serviço</Text>
      <TextInput style={styles.input} value={local} onChangeText={setLocal} />

      <Text style={styles.label}>Data</Text>
      <MaskedTextInput
        mask="99/99/9999"
        placeholder="Ex: 01/01/2025"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => setData(text)}
      />

      <Text style={styles.label}>Horário</Text>
      <MaskedTextInput
        mask="99:99"
        placeholder="Ex: 14:00"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(text) => setHora(text)}
      />

      <Text style={styles.label}>Orçamento</Text>
      <TextInput
        placeholder='R$ 0,00'
        keyboardType="numeric"
        style={styles.input}
        value={orcamento}
        onChangeText={handleOrcamentoChange}
      />

      <View style={custom.buttonRow}>
        <View style={custom.buttonWrapper}>
          <Button title="Confirmar" onPress={confirmarAgendamento} />
        </View>
        <View style={custom.buttonWrapper}>
          <Button title="Meus Agendamentos" onPress={() => router.push('/perfil/agendamentos')} />
        </View>
      </View>

      {mensagem !== '' && (
        <Text style={{ marginTop: 20, color: 'green', fontWeight: 'bold' }}>
          {mensagem}
        </Text>
      )}
    </View>
  );
}

const custom = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'start',
    marginTop: 20,
    gap: 10,
  },
  buttonWrapper: {
    minWidth: 100,
  },
});
