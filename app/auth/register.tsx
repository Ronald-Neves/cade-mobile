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

// Import Firebase Auth e Firestore
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "Email inválido.");
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Erro", "A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não conferem.");
      return;
    }

    try {
      console.log("1️⃣ Criando conta com:", email, senha);
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = auth.currentUser; // pega o usuário logado automaticamente
      if (!user) {
        throw new Error("Usuário não encontrado após criação");
      }
      console.log("✅ Conta criada com UID:", user.uid);

      try {
        console.log("2️⃣ Atualizando displayName...");
        await updateProfile(user, { displayName: usuario });
        console.log("✅ DisplayName atualizado:", usuario);
      } catch (error: any) {
        console.error("🚨 Erro ao atualizar displayName:", error.message);
      }

      try {
        console.log("3️⃣ Gravando no Firestore...");
        await setDoc(doc(db, "users", user.uid), {
          username: usuario,
          email: email,
          createdAt: new Date(),
        });
        console.log("✅ Documento Firestore criado");
      } catch (error: any) {
        console.error("🚨 Erro ao gravar no Firestore:", error.message);
      }

      // Pequeno delay para garantir sincronização do estado
      setTimeout(() => {
        router.replace("/home");
      }, 500);

    } catch (error: any) {
      console.error("🚨 Erro ao criar usuário:", error.message);
      Alert.alert("Erro no cadastro", error.message || "Algo deu errado");
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
