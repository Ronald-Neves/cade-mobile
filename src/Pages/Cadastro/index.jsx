import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";
import { Box, Button, Container, Form, Input, Label, LinkRow, LinkText, RightPanel, Subtitle, Title } from "./styles";

export default function Cadastro() {
  const navigation = useNavigation();

  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");

  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não conferem.");
      return;
    }

    // Simula sucesso no cadastro
    navigation.navigate("Home");
  };

  return (
    <Container>
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
              <LinkText>CADASTRAR</LinkText>
            </Button>

            <LinkRow>
              <LinkText onPress={() => navigation.navigate("Login")}>
                Já tem conta? Entrar
              </LinkText>
            </LinkRow>
          </Form>
        </RightPanel>
      </Box>
    </Container>
  );
}
