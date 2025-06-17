// app/layout.js
import { Slot } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { initDatabase } from "../lib/database/initDb"; // caminho fora da pasta /app

export default function RootLayout() {
  useEffect(() => {
    const iniciar = async () => {
      try {
        initDatabase();
        console.log("📦 Banco de dados inicializado com sucesso.");
      } catch (erro) {
        console.warn("❌ Erro ao inicializar o banco de dados:", erro);
      }
    };

    iniciar();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
