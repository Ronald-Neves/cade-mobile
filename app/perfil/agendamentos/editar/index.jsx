import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
import styles from './styles';

export default function EditarAgendamento() {
  const { index } = useLocalSearchParams();
  const router = useRouter();

  const [agendamento, setAgendamento] = useState(null);
  const [local, setLocal] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [orcamento, setOrcamento] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  useEffect(() => {
    const carregarAgendamento = async () => {
      const dados = await AsyncStorage.getItem('agendamentos');
      if (dados) {
        const lista = JSON.parse(dados);
        const item = lista[Number(index)];
        setAgendamento(item);
        setLocal(item.local);
        setData(item.data);
        setHora(item.hora);
        setOrcamento(item.orcamento);
      }
    };

    carregarAgendamento();
  }, [index]);

  const formatarMoeda = (valor: string) => {
    const numeric = valor.replace(/\D/g, '');
    const float = parseFloat(numeric) / 100;
    if (isNaN(float)) return '';
    return float.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleOrcamentoChange = (text: string) => {
    const formatado = formatarMoeda(text);
    setOrcamento(formatado);
  };

  const salvarEdicao = async () => {
    const dados = await AsyncStorage.getItem('agendamentos');
    let lista = dados ? JSON.parse(dados) : [];

    lista[Number(index)] = {
      ...lista[Number(index)],
      local,
      data,
      hora,
      orcamento,
    };

    await AsyncStorage.setItem('agendamentos', JSON.stringify(lista));
    setMensagemSucesso('Agendamento editado com sucesso!');
  };

  if (!agendamento) return <Text style={styles.title}>Carregando...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar: {agendamento.servico}</Text>

      <Text style={styles.label}>Local do serviço</Text>
      <TextInput style={styles.input} value={local} onChangeText={setLocal} />

      <Text style={styles.label}>Data</Text>
      <MaskedTextInput
        mask="99/99/9999"
        placeholder="Ex: 01/01/2025"
        keyboardType="numeric"
        style={styles.input}
        value={data}
        onChangeText={setData}
      />

      <Text style={styles.label}>Horário</Text>
      <MaskedTextInput
        mask="99:99"
        placeholder="Ex: 14:00"
        keyboardType="numeric"
        style={styles.input}
        value={hora}
        onChangeText={setHora}
      />

      <Text style={styles.label}>Orçamento</Text>
      <TextInput
        placeholder="R$ 0,00"
        keyboardType="numeric"
        style={styles.input}
        value={orcamento}
        onChangeText={handleOrcamentoChange}
      />

      <View style={custom.buttonRow}>
        <View style={custom.buttonWrapper}>
          <Button title="Voltar" onPress={() => router.back()} />
        </View>
        <View style={custom.buttonWrapper}>
          <Button title="Salvar Alterações" onPress={salvarEdicao} />
        </View>
      </View>

      {mensagemSucesso ? (
        <Text
          style={{
            marginTop: 15,
            color: 'green',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          {mensagemSucesso}
        </Text>
      ) : null}
    </View>
  );
}

const custom = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    gap: 10,
  },
  buttonWrapper: {
    minWidth: 120,
  },
});
