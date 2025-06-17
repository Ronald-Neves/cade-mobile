import { useRouter } from "expo-router";
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

import { FontAwesome5 } from "@expo/vector-icons"; // ✅ usando FontAwesome5 (ícones compatíveis)

function Perfil() {
  const router = useRouter();

  const usuario = {
    nome: "Samuel Souza",
    avatar: "https://tse4.explicit.bing.net/th?id=OIP.KPFf8rTO-ICls97C8pZskAHaEK&pid=Api&P=0&h=180",
  };

  // ✅ Tipagem correta do parâmetro 'path'
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: usuario.avatar }} />
        <Name>{usuario.nome}</Name>
      </Header>

      <SectionTitle>Conta</SectionTitle>
      <OptionList>
        <OptionItem onPress={() => navigateTo("/perfil/editarperfil")}>
          <OptionIcon><FontAwesome5 name="user-edit" size={20} color="#555" /></OptionIcon>
          <OptionText>Editar Perfil</OptionText>
        </OptionItem>
        <OptionItem onPress={() => navigateTo("/perfil/agendamentos")}>
          <OptionIcon><FontAwesome5 name="history" size={20} color="#555" /></OptionIcon>
          <OptionText>Meus Agendamentos</OptionText>
        </OptionItem>
        <OptionItem onPress={() => navigateTo("/perfil/service")}>
          <OptionIcon><FontAwesome5 name="credit-card" size={20} color="#555" /></OptionIcon>
          <OptionText>Meus Serviços</OptionText>
        </OptionItem>
      </OptionList>

      <SectionTitle>Preferências</SectionTitle>
      <OptionList>
        <OptionItem onPress={() => navigateTo("/perfil/ajuda")}>
          <OptionIcon><FontAwesome5 name="question-circle" size={20} color="#555" /></OptionIcon>
          <OptionText>Ajuda</OptionText>
        </OptionItem>
      </OptionList>

      <LogoutButton onPress={() => console.log("Sair")}>
        <LogoutIcon><FontAwesome5 name="sign-out-alt" size={20} color="#d9534f" /></LogoutIcon>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  );
}

export default Perfil;