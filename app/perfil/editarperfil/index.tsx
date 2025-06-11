import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert } from "react-native";
import {
  AvatarButton,
  AvatarImage,
  AvatarOptions,
  Container,
  Input,
  Label,
  SaveButton,
  SaveButtonText,
  Title,
} from "./styles";

const avatarOptions = [
  {
    id: "masc",
    url: "https://i.pravatar.cc/150?img=12", // Avatar masculino
  },
  {
    id: "fem",
    url: "https://i.pravatar.cc/150?img=47", // Avatar feminino
  },
];

export default function EditarPerfil() {
  const router = useRouter();

  const [nome, setNome] = useState("Samuel Souza");
  const [avatarSelecionado, setAvatarSelecionado] = useState(avatarOptions[0].url);

  const handleSalvar = () => {
    Alert.alert("Perfil atualizado", `Nome: ${nome}`);
    router.back(); // Volta para a tela de perfil
  };

  return (
    <Container>
      <Title>Editar Perfil</Title>

      <Label>Nome</Label>
      <Input
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Label>Selecionar Avatar</Label>
      <AvatarOptions>
        {avatarOptions.map((avatar) => (
          <AvatarButton
            key={avatar.id}
            onPress={() => setAvatarSelecionado(avatar.url)}
            style={{
              borderWidth: avatarSelecionado === avatar.url ? 2 : 0,
              borderColor: "#007bff",
            }}
          >
            <AvatarImage source={{ uri: avatar.url }} />
          </AvatarButton>
        ))}
      </AvatarOptions>

      <SaveButton onPress={handleSalvar}>
        <SaveButtonText>Salvar Alterações</SaveButtonText>
      </SaveButton>
    </Container>
  );
}
