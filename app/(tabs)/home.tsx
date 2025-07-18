import { useRouter } from "expo-router"; // ✅ Adicionado para navegação
import { ScrollView } from "react-native";
import {
  Banner,
  BannerImage,
  Card,
  CardImage,
  CardRow,
  CardTitle,
  Container,
  ExploreButton,
  ExploreButtonText,
  SectionTitle,
} from "./Home/styles";

export default function Home() {
  const router = useRouter(); // ✅ Instancia o roteador

  return (
    <ScrollView>
      <Container>
        <Banner>
          <BannerImage
            source={{
              uri: "https://img.freepik.com/vetores-gratis/contrate-um-conceito-de-ilustracao-de-servico-freelancer_23-2148685270.jpg",
            }}
          />
        </Banner>

        <SectionTitle>Serviços em destaque</SectionTitle>

        <CardRow>
          <Card>
            <CardImage source={{ uri: "https://tacontratado.com.br/wp-content/uploads/2021/08/encanador.jpg" }} />
            <CardTitle>Encanador</CardTitle>
          </Card>
          <Card>
            <CardImage source={{ uri: "https://novonegocio.com.br/wp-content/uploads/2012/07/Eletricista-Veja-Como-Ser-um-Bom-Profissional.jpg" }} />
            <CardTitle>Eletricista</CardTitle>
          </Card>
        </CardRow>

        <CardRow>
          <Card>
            <CardImage source={{ uri: "https://blog.princesatoalhas.com.br/wp-content/uploads/2020/08/manicure-sucesso.jpg" }} />
            <CardTitle>Manicure</CardTitle>
          </Card>
          <Card>
            <CardImage source={{ uri: "https://www.jornaldaconstrucaocivil.com.br/wp-content/uploads/2018/10/Pedreiro-2.jpg" }} />
            <CardTitle>Pedreiro</CardTitle>
          </Card>
        </CardRow>

        {/* ✅ Botão com navegação para /servico */}
        <ExploreButton onPress={() => router.push("/servico")}>
          <ExploreButtonText>Explorar todos os serviços</ExploreButtonText>
        </ExploreButton>
      </Container>
    </ScrollView>
  );
}
