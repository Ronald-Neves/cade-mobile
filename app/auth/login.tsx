import { useState } from "react";
import {
  Box,
  CheckboxWrapper,
  Container,
  Form,
  Input,
  LinkRow,
  LinkText,
  RightPanel,
  Subtitle,
  Title
} from "./styles";

import { useRouter } from "expo-router";
import { Alert, Button } from "react-native";

import { obterDados, salvarDados } from "../services/storage"; // Ajuste se necessário

export default function Login() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  const handleLogin = async () => {
    if (!usuario.trim() || !senha.trim()) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    const dadosUsuario = await obterDados(`usuario:${usuario}`);
    if (!dadosUsuario) {
      Alert.alert("Erro", "Usuário não encontrado.");
      return;
    }

    if (dadosUsuario.senha !== senha) {
      Alert.alert("Erro", "Senha incorreta.");
      return;
    }

    await salvarDados('usuario_logado', usuario); // ✅ Salva o nome do usuário logado
    Alert.alert("Sucesso", "Login realizado.");
    router.replace("/(tabs)/home"); // Ajuste a rota se necessário
  };

  const handleCadastro = () => {
    router.push("/auth/register");
  };

  return (
    <Container>
      <Box>
        <RightPanel>
          <Title>Login</Title>
          <Subtitle>Entre com seus dados para continuar</Subtitle>
          <Form>
            <Input
              placeholder="Nome de usuário"
              value={usuario}
              onChangeText={setUsuario}
            />
            <Input
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
            <CheckboxWrapper />
            <Button onPress={handleLogin} title="ENTRAR" />
            <LinkRow>
              <LinkText onPress={handleCadastro}>
                Não tem conta? Cadastrar
              </LinkText>
              <LinkText>Esqueceu a senha?</LinkText>
            </LinkRow>
          </Form>
        </RightPanel>
      </Box>
    </Container>
  );
}
