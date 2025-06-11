import { Slot } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { initDatabase } from "./database/initDb"; // ajuste o caminho se necessário

export default function Layout() {
  useEffect(() => {
    initDatabase(); // Cria as tabelas ao iniciar o app
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Slot />
    </SafeAreaView>
  );
}
