// app/layout.js
import { Slot } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { initDatabase } from "../lib/database/initDb"; // ajustado para estrutura fora da pasta app

export default function RootLayout() {
  useEffect(() => {
    initDatabase(); // Inicializa o banco de dados ao abrir o app
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
