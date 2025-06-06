import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

// Gradiente no fundo da tela inteira
export const Container = styled(LinearGradient).attrs({
  colors: ['#0011ff', '#2575fc'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

// Caixa principal
export const Box = styled.View`
  width: 90%;
  height: 80%;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  flex-direction: row;
  elevation: 10; /* sombra Android */
  shadow-color: #000; /* sombra iOS */
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
`;

// Painel esquerdo com gradiente
export const LeftPanel = styled(LinearGradient).attrs({
  colors: ['#00c6ff', '#0072ff'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding: 40px;
  justify-content: center;
`;

export const LeftPanelText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

export const RightPanel = styled.View`
  flex: 1;
  padding: 40px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  color: #555;
  margin-bottom: 20px;
`;

export const Form = styled.View`
  gap: 15px;
`;

export const Input = styled.TextInput`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  padding: 12px;
  background-color: #007bff;
  border-radius: 6px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const LinkRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Link = styled.Text`
  color: #007bff;
  text-decoration: underline;
  font-size: 14px;
`;

export const CheckboxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #333;
`;
