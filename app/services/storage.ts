import AsyncStorage from '@react-native-async-storage/async-storage';

export async function salvarDados(key: string, value: any) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export async function obterDados(key: string) {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

export async function removerDados(key: string) {
  await AsyncStorage.removeItem(key);
}
