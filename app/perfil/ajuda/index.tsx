import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  AnswerText,
  Container,
  QuestionContainer,
  QuestionText,
  Separator,
  Title
} from "./styles";

const perguntasRespostas = [
  {
    pergunta: "Como agendar um serviço?",
    resposta: "Vá até a aba 'Serviços', escolha um prestador e toque em 'Agendar'. Em seguida, você será direcionado para uma página onde deverá fornecer as informações do serviço. Após preencher os dados e tocar em 'Confirmar', o serviço ficará visível na seção 'Meus Agendamentos'.",
  },
  {
    pergunta: "Como cancelar um agendamento?",
    resposta: "Após agendar, você pode acessar a página 'Meus Agendamentos' no perfil. Lá, é possível visualizar a opção de excluir um agendamento. Após confirmar a exclusão, o cancelamento será realizado com sucesso.",
  },
  {
    pergunta: "É possível editar um agendamento?",
    resposta: "Sim. Acesse 'Meus Agendamentos' no perfil e selecione 'editar'. Desse modo pode ser feita a alteração no agendamaneto.",
  },
  {
    pergunta: "Posso editar meu perfil?",
    resposta: "Sim. Vá até a aba 'Perfil' e toque em 'Editar Perfil'.",
  },
  {
    pergunta: "Como sair da conta?",
    resposta: "Vá até a aba 'Perfil' e toque em 'Sair' na parte inferior da tela.",
  },
  {
    pergunta: "Qual a ideia do aplicativo Cade?",
    resposta: "A proposta do aplicativo é conectar prestadores de serviços com possíveis clientes, facilitando o agendamento e a comunicação entre as partes.",
  },
  {
    pergunta: "Como eu vejo os serviços disponíveis?",
    resposta: "Vá até a aba 'Perfil' e toque em 'Meus Serviços'. Nesta página, você poderá visualizar todos os serviços solicitados pelos usuários.",
  },
  {
    pergunta: "Informações",
    resposta: "O aplicativo 'Cade?' está em sua versão inicial e ainda está em fase de desenvolvimento. Por isso, é possível que alguns erros ou limitações estejam presentes nesta etapa. Estamos trabalhando constantemente para aprimorar a experiência, corrigir eventuais falhas e lançar atualizações com melhorias e novas funcionalidades em breve. Agradecemos pela compreensão e por fazer parte dessa jornada com a gente.",
  },
];

export default function Ajuda() {
  const [visiveis, setVisiveis] = useState<number[]>([]);

  const toggleResposta = (index: number) => {
    setVisiveis((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Container>
      <Title>Central de Ajuda</Title>

      <FlatList
        data={perguntasRespostas}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item, index }) => (
          <QuestionContainer onPress={() => toggleResposta(index)}>
            <QuestionText>{item.pergunta}</QuestionText>
            {visiveis.includes(index) && (
              <AnswerText>{item.resposta}</AnswerText>
            )}
          </QuestionContainer>
        )}
      />
    </Container>
  );
}
