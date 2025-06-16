// app/layout.js
import { Slot } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { initDatabase } from "./database/initDb"; // 👈 importa a função de init

export default function Layout() {
  useEffect(() => {
    initDatabase(); // 👈 inicializa o banco de dados ao abrir o app
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Slot />
    </SafeAreaView>
  );
}
