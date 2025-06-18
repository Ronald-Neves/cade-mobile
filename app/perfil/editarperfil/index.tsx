import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { obterDados, salvarDados } from "../../services/storage";
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
  { id: "masc1", url: "https://i.pravatar.cc/150?img=12" },
  { id: "fem1", url: "https://i.pravatar.cc/150?img=47" },
  { id: "masc2", url: "https://i.pravatar.cc/150?img=15" },
  { id: "fem2", url: "https://i.pravatar.cc/150?img=45" },
  { id: "neutro1", url: "https://i.pravatar.cc/150?img=3" },
  { id: "neutro2", url: "https://i.pravatar.cc/150?img=33" },
  { id: "neutro3", url: "https://i.pravatar.cc/150?img=5" },
  { id: "masc3", url: "https://i.pravatar.cc/150?img=26" },
  { id: "fem3", url: "https://i.pravatar.cc/150?img=39" },
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

  const tirarFoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert("Permissão negada", "Você precisa permitir o uso da câmera.");
      return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!resultado.canceled) {
      setAvatarSelecionado(resultado.assets[0].uri);
    }
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

      <SaveButton onPress={tirarFoto} style={{ backgroundColor: "#28a745", marginBottom: 10 }}>
        <SaveButtonText>📷 Tirar Foto com a Câmera</SaveButtonText>
      </SaveButton>

      <SaveButton onPress={handleSalvar}>
        <SaveButtonText>Salvar Alterações</SaveButtonText>
      </SaveButton>
    </Container>
  );
}
