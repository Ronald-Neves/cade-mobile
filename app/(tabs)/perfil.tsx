import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig"; // ajuste caminho se necessário
import {
  Avatar,
  Container,
  Header,
  LogoutButton,
  LogoutIcon,
  LogoutText,
  Name,
  OptionIcon,
  OptionItem,
  OptionList,
  OptionText,
  SectionTitle
} from "./Home/Perfil/styles";

function Perfil() {
  const router = useRouter();
  const [nome, setNome] = useState("Carregando...");
  const [avatar, setAvatar] = useState("https://ui-avatars.com/api/?name=Usuário");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setNome(user.displayName || "Usuário");
        setAvatar(`https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || "User")}`);
      } else {
        setNome("Desconectado");
      }
    });

    return unsubscribe;
  }, []);

  const navigateTo = (path) => {
    router.push(path);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("✅ Usuário deslogado");
      router.replace("/auth/login"); // ou rota inicial
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: avatar }} />
        <Name>{nome}</Name>
      </Header>

      <SectionTitle>Conta</SectionTitle>
      <OptionList>
        <OptionItem onPress={() => navigateTo("/perfil/editarperfil")}>
          <OptionIcon><FontAwesome name="user-edit" size={20} color="#555" /></OptionIcon>
          <OptionText>Editar Perfil</OptionText>
        </OptionItem>
        <OptionItem onPress={() => navigateTo("/perfil/agendamentos")}>
          <OptionIcon><FontAwesome name="history" size={20} color="#555" /></OptionIcon>
          <OptionText>Meus Agendamentos</OptionText>
        </OptionItem>
        <OptionItem onPress={() => navigateTo("/perfil/pagamento")}>
          <OptionIcon><FontAwesome name="credit-card" size={20} color="#555" /></OptionIcon>
          <OptionText>Meus Serviços</OptionText>
        </OptionItem>
      </OptionList>

      <SectionTitle>Preferências</SectionTitle>
      <OptionList>
        <OptionItem onPress={() => navigateTo("/home/perfil/notificacoes")}>
          <OptionIcon><FontAwesome name="bell" size={20} color="#555" /></OptionIcon>
          <OptionText>Notificações</OptionText>
        </OptionItem>
        <OptionItem onPress={() => navigateTo("/home/perfil/configuracoes")}>
          <OptionIcon><FontAwesome name="cog" size={20} color="#555" /></OptionIcon>
          <OptionText>Configurações</OptionText>
        </OptionItem>
        <OptionItem onPress={() => navigateTo("/perfil/ajuda")}>
          <OptionIcon><FontAwesome name="question-circle" size={20} color="#555" /></OptionIcon>
          <OptionText>Ajuda</OptionText>
        </OptionItem>
      </OptionList>

      <LogoutButton onPress={handleLogout}>
        <LogoutIcon><FontAwesome name="sign-out" size={20} color="#d9534f" /></LogoutIcon>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  );
}

export default Perfil;
