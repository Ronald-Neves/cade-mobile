// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" options={{ title: 'Início' }} />
      <Tabs.Screen name="Perfil" options={{ title: 'Perfil' }} />
      <Tabs.Screen name="Busca" options={{ title: 'Busca' }} />
      <Tabs.Screen name="Servico" options={{ title: 'Serviços' }} />
    </Tabs>
  );
}
