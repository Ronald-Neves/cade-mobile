import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";

import {
  Box,
  Button,
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

import { cadastrarUsuario } from "../database/usuarios"; // ✅ Importa a função de cadastro

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

    try {
      await cadastrarUsuario(usuario, email, senha); // ✅ Salva no SQLite
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar. Email já pode estar em uso.");
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <Container>
      <Box>
        <RightPanel>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={60}
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              showsVerticalScrollIndicator={false}
            >
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
                  type="email"
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
                  <LinkText>CADASTRAR</LinkText>
                </Button>

                <LinkRow>
                  <LinkText onPress={() => router.push("/auth/login")}>
                    Já tem conta? Entrar
                  </LinkText>
                </LinkRow>
              </Form>
            </ScrollView>
          </KeyboardAvoidingView>
        </RightPanel>
      </Box>
    </Container>
  );
}
