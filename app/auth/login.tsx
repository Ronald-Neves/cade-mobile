import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";

export default function Login() {
  const router = useRouter();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!usuario || !senha) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }
    router.replace("/(tabs)/Home");
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Usuário" value={usuario} onChangeText={setUsuario} />
      <TextInput placeholder="Senhaa" secureTextEntry value={senha} onChangeText={setSenha} />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
