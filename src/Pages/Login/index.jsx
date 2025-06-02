import { useState } from "react";
import {
    Box,
    Button,
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

import { useNavigation } from "@react-navigation/native";
import { Alert, Switch } from "react-native";

export default function Login() {
  const navigation = useNavigation();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  const handleLogin = () => {
    // Simular login simples
    if (usuario.trim() === "" || senha.trim() === "") {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    // Navega para a Home
    navigation.navigate("Home");
  };

  const handleCadastro = () => {
    navigation.navigate("Cadastro");
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
            <Button onPress={handleLogin}>
              <LinkText>ENTRAR</LinkText>
            </Button>

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
