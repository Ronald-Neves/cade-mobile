import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { obterDados, salvarDados } from "../../services/storage"; // caminho corrigido
import {
  AvatarButton,
  AvatarImage,
  AvatarOptions,
  Container,
  Input,
  Label,
  SaveButton,
  SaveButtonText,
  Title
} from "./styles";

const avatarOptions = [
  { id: "masc", url: "https://i.pravatar.cc/150?img=12" },
  { id: "fem", url: "https://i.pravatar.cc/150?img=47" },
];

export default function EditarPerfil() {
  const router = useRouter();
  const [usuarioKey, setUsuarioKey] = useState("");
  const [email, setEmail] = useState("");
  const [avatarSelecionado, setAvatarSelecionado] = useState(avatarOptions[0].url);

  useEffect(() => {
    const carregar = async () => {
      const key = await obterDados("usuario_logado");
      const dados = await obterDados(`usuario:${key}`);
      if (dados) {
        setUsuarioKey(key);
        setEmail(dados.email || "");
        setAvatarSelecionado(dados.avatar || avatarOptions[0].url);
      }
    };
    carregar();
  }, []);

  const handleSalvar = async () => {
    const dadosAntigos = await obterDados(`usuario:${usuarioKey}`);
    const atualizados = {
      ...dadosAntigos,
      avatar: avatarSelecionado,
    };

    await salvarDados(`usuario:${usuarioKey}`, atualizados);
    Alert.alert("Perfil atualizado com sucesso!");
    router.back();
  };

  return (
    <Container>
      <Title>Editar Foto de Perfil</Title>

      <Label>Email cadastrado</Label>
      <Input
        value={email}
        editable={false}
        style={{ backgroundColor: "#eee", color: "#666" }}
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
