import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { obterDados } from "../services/storage"; // ajuste se necessário
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
  const [usuario, setUsuario] = useState(null);

  const navigateTo = (path) => {
    router.push(path);
  };

  useEffect(() => {
    const carregarUsuario = async () => {
      const nome = await obterDados("usuario_logado");
      const dados = await obterDados(`usuario:${nome}`);
      if (dados) setUsuario(dados);
    };
    carregarUsuario();
  }, []);

  if (!usuario) return null;

  return (
    <Container>
      <Header>
        <Avatar source={{ uri: usuario.avatar || "https://i.pravatar.cc/150?img=12" }} />
        <Name>{usuario.nome}</Name>
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
        <OptionItem onPress={() => navigateTo("/perfil/service")}>
          <OptionIcon><FontAwesome name="credit-card" size={20} color="#555" /></OptionIcon>
          <OptionText>Meus Serviços</OptionText>
        </OptionItem>
      </OptionList>

      <SectionTitle>Preferências</SectionTitle>
      <OptionList>
        <OptionItem onPress={() => navigateTo("/perfil/ajuda")}>
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
