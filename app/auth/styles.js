import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

// Fundo com gradiente
export const Container = styled(LinearGradient).attrs({
  colors: ['#0011ff', '#2575fc'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

// Caixa principal
export const Box = styled.View`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  background-color: #fff;
  overflow: hidden;
  padding: 30px;
  elevation: 10;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 6px;
`;

// Painel direito (formulário)
export const RightPanel = styled.View`
  width: 100%;
  justify-content: center;
`;

// Título principal
export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

// Subtítulo
export const Subtitle = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

// Formulário
export const Form = styled.View`
  gap: 15px;
`;

// Campo de entrada
export const Input = styled.TextInput`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #f9f9f9;
`;

// Botão estilizado (caso use TouchableOpacity ao invés de Button nativo)
export const Button = styled.TouchableOpacity`
  padding: 14px;
  background-color: #007bff;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

// Linha de links (cadastro / esqueceu senha)
export const LinkRow = styled.View`
  margin-top: 20px;
  align-items: center;
`;

// Texto de link
export const LinkText = styled.Text`
  color: #007bff;
  margin-top: 8px;
  text-decoration: underline;
`;

// Checkbox + label
export const CheckboxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #444;
`;
