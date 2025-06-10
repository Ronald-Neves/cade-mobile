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

import { FontAwesome } from "@expo/vector-icons";

function Perfil() {
  const router = useRouter();

  const usuario = {
    nome: "Samuel Souza",
    avatar: "https://tse4.explicit.bing.net/th?id=OIP.KPFf8rTO-ICls97C8pZskAHaEK&pid=Api&P=0&h=180",
  };

  const navigateTo = (path) => {
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
        <OptionItem onPress={() => navigateTo("/perfil/editar")}>
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
        <OptionItem onPress={() => navigateTo("/home/perfil/ajuda")}>
          <OptionIcon><FontAwesome name="question-circle" size={20} color="#555" /></OptionIcon>
          <OptionText>Ajuda</OptionText>
        </OptionItem>
      </OptionList>

      <LogoutButton onPress={() => console.log("Sair")}>
        <LogoutIcon><FontAwesome name="sign-out" size={20} color="#d9534f" /></LogoutIcon>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  );
}

export default Perfil;
