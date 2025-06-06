import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import {
  Container,
  FooterMenu,
  MenuItem,
  MenuText,
} from "./styles";


// Substituindo os ícones por equivalents do react-native-vector-icons

const Home = ({ children }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const isActive = (path) => route.name === path;

  return (
    <Container>
      <View style={{ flex: 1 }}>{children}</View>

      <FooterMenu>
        <MenuItem onPress={() => navigation.navigate("Inicio")} active={isActive("Inicio")}>
          <Feather name="home" size={24} color={isActive("Inicio") ? "#000" : "#888"} />
          <MenuText active={isActive("Inicio")}>Início</MenuText>
        </MenuItem>

        <MenuItem onPress={() => navigation.navigate("Busca")} active={isActive("Busca")}>
          <Feather name="search" size={24} color={isActive("Busca") ? "#000" : "#888"} />
          <MenuText active={isActive("Busca")}>Busca</MenuText>
        </MenuItem>

        <MenuItem onPress={() => navigation.navigate("Servico")} active={isActive("Servico")}>
          <Feather name="briefcase" size={24} color={isActive("Servico") ? "#000" : "#888"} />
          <MenuText active={isActive("Servico")}>Serviços</MenuText>
        </MenuItem>

        <MenuItem onPress={() => navigation.navigate("Perfil")} active={isActive("Perfil")}>
          <Feather name="user" size={24} color={isActive("Perfil") ? "#000" : "#888"} />
          <MenuText active={isActive("Perfil")}>Perfil</MenuText>
        </MenuItem>
      </FooterMenu>
    </Container>
  );
};

export default Home;
