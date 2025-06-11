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

// Firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig"; // ajuste o caminho

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
      // Busca usuário no Firestore pelo username
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", usuario.trim()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Alert.alert("Erro", "Usuário não encontrado.");
        return;
      }

      // Pega o email do primeiro usuário encontrado (username é único no cadastro)
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      if (!userData.email) {
        Alert.alert("Erro", "Email do usuário não encontrado.");
        return;
      }

      // Faz login com email e senha no Firebase Auth
      await signInWithEmailAndPassword(auth, userData.email, senha);
      router.replace("/home");

    } catch (error: any) {
      Alert.alert("Erro no login", error.message || "Falha ao tentar entrar");
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
