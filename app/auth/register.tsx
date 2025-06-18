import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";

import {
  Box,
  Button,
  ButtonText,
  Container,
  Form,
  Input,
  Label,
  LinkRow,
  LinkText,
  RightPanel,
  Subtitle,
  Title
} from "./styles";

import { obterDados, salvarDados } from "../services/storage";

export default function Cadastro() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleCadastro = async () => {
    if (!usuario || !email || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não conferem.");
      return;
    }

    const existente = await obterDados(`usuario:${usuario}`);
    if (existente) {
      Alert.alert("Erro", "Usuário já cadastrado.");
      return;
    }

    const novoUsuario = { usuario, email, senha };
    await salvarDados(`usuario:${usuario}`, novoUsuario);

    Alert.alert("Sucesso", "Usuário cadastrado com sucesso.");
    router.replace("/auth/login");
  };

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={60}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 60,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Box>
            <RightPanel>
              <Title>Cadastro</Title>
              <Subtitle>Preencha os dados abaixo para criar sua conta</Subtitle>

              <Form>
                <Label>Nome de usuário</Label>
                <Input
                  placeholder="Digite seu nome de usuário"
                  value={usuario}
                  onChangeText={setUsuario}
                />

                <Label>Email</Label>
                <Input
                  placeholder="Digite seu email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />

                <Label>Senha</Label>
                <Input
                  placeholder="Digite sua senha"
                  value={senha}
                  onChangeText={setSenha}
                  secureTextEntry
                />

                <Label>Confirmar senha</Label>
                <Input
                  placeholder="Confirme sua senha"
                  value={confirmarSenha}
                  onChangeText={setConfirmarSenha}
                  secureTextEntry
                />

                <Button onPress={handleCadastro}>
                  <ButtonText>CADASTRAR</ButtonText>
                </Button>

                <View style={{ marginTop: 24, alignItems: 'center' }}>
                  <LinkRow>
                    <LinkText onPress={() => router.push("/auth/login")}>
                      Já tem conta? Entrar
                    </LinkText>
                  </LinkRow>
                </View>
              </Form>
            </RightPanel>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
