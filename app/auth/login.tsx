import { useState } from "react";
import {
  Box,
  CheckboxWrapper,
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

import { useRouter } from "expo-router";
import { Alert, Button, Switch } from "react-native";
import { autenticarUsuario } from "../database/usuarios"; // ✅ Importação do SQLite

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

    try {
      const user = await autenticarUsuario(usuario, senha); // Busca no banco
      Alert.alert("Sucesso", `Bem-vindo, ${user.nome}!`);
      router.replace("/home");
    } catch (error) {
      Alert.alert("Erro", "Usuário ou senha inválidos.");
    }
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
            <CheckboxWrapper>
              <Switch
                value={lembrar}
                onValueChange={setLembrar}
              />
              <Label>Lembrar de mim</Label>
            </CheckboxWrapper>
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
