import { ScrollView, Text } from "react-native";
import {
    Container,
    ServiceButton,
    ServiceCard,
    ServiceDescription,
    ServiceGrid,
    ServiceImage,
    ServiceInfo,
    ServiceName,
    Title,
} from "./styles";

function Servico() {
  const servicos = [
    {
      id: 1,
      nome: "Eletricista",
      descricao: "Instalações, reparos e manutenção elétrica.",
      imagem: "https://novonegocio.com.br/wp-content/uploads/2012/07/Eletricista-Veja-Como-Ser-um-Bom-Profissional.jpg",
    },
    {
      id: 2,
      nome: "Encanador",
      descricao: "Desentupimentos, vazamentos e reformas hidráulicas.",
      imagem: "https://tacontratado.com.br/wp-content/uploads/2021/08/encanador.jpg",
    },
    {
      id: 3,
      nome: "Manicure",
      descricao: "Serviço de manicure e pedicure em domicílio.",
      imagem: "https://blog.princesatoalhas.com.br/wp-content/uploads/2020/08/manicure-sucesso.jpg",
    },
    {
      id: 4,
      nome: "Cabeleireiro",
      descricao: "Cortes, coloração e penteados.",
      imagem: "https://tse2.mm.bing.net/th?id=OIP.kDYBqbVUz4Ayhh4GMiGD6QHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      nome: "Pedreiro",
      descricao: "Reformas, construção e pequenos reparos em alvenaria.",
      imagem: "https://www.jornaldaconstrucaocivil.com.br/wp-content/uploads/2018/10/Pedreiro-2.jpg",
    },
    {
      id: 6,
      nome: "Jardineiro",
      descricao: "Manutenção de jardins, poda, irrigação e paisagismo.",
      imagem: "https://www.colegioweb.com.br/wp-content/uploads/2014/12/jardineiro.jpg",
    },
    {
      id: 7,
      nome: "Diarista",
      descricao: "Limpeza residencial completa por diária.",
      imagem: "https://tse2.mm.bing.net/th?id=OIP.fQ6Lf0xTX_qDRrR9nw2mxAHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 8,
      nome: "Babá",
      descricao: "Cuidado de crianças com carinho e responsabilidade.",
      imagem: "https://tse2.mm.bing.net/th?id=OIP.fhHxZhj1JEeHGapxVM4awgHaEj&pid=Api&P=0&h=180",
    },
    {
      id: 9,
      nome: "Cuidador de Idosos",
      descricao: "Acompanhamento e assistência para idosos.",
      imagem: "https://tse3.mm.bing.net/th?id=OIP.jmTvdA_VCDmTbUATmbBalgHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 10,
      nome: "Professor Particular",
      descricao: "Aulas particulares em diversas disciplinas.",
      imagem: "https://tse1.mm.bing.net/th?id=OIP.P0vdV2E65rgMCEOrzro9XgHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 11,
      nome: "Técnico em Informática",
      descricao: "Manutenção de computadores e suporte técnico.",
      imagem: "https://modelosdecurriculos.org/wp-content/uploads/2021/05/Tecnico-de-Informatica-1.jpg",
    },
    {
      id: 12,
      nome: "Personal Trainer",
      descricao: "Treinos personalizados para saúde e bem-estar.",
      imagem: "https://tse4.mm.bing.net/th?id=OIP.FxqWAwJJa3vsjsvw8vO0LAHaE8&pid=Api&P=0&h=180",
    },
  ];

  return (
    <ScrollView>
      <Container>
        <Title>Serviços Disponíveis</Title>
        <ServiceGrid>
          {servicos.map((servico) => (
            <ServiceCard key={servico.id}>
              <ServiceImage source={{ uri: servico.imagem }} />
              <ServiceInfo>
                <ServiceName>{servico.nome}</ServiceName>
                <ServiceDescription>{servico.descricao}</ServiceDescription>
                <ServiceButton>
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>Agendar</Text>
                </ServiceButton>
              </ServiceInfo>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </Container>
    </ScrollView>
  );
}

export default Servico;
