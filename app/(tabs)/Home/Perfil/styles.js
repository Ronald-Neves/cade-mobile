import { LinearGradient } from 'expo-linear-gradient';
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(LinearGradient).attrs({
  colors: ['#e0f7fa', '#ffffff'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  padding: 24px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 12px;
  border-width: 2px;
  border-color: #00bcd4;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: 600;
  color: #263238;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #37474f;
  margin-top: 25px;
  margin-bottom: 12px;
`;

export const OptionList = styled.View`
  border-top-width: 1px;
  border-top-color: #cfd8dc;
`;

export const OptionItem = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding-vertical: 14px;
  padding-horizontal: 10px;
  border-radius: 12px;
  margin-bottom: 10px;
  background-color: #ffffff;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

export const OptionIcon = styled.View`
  margin-right: 15px;
`;

export const OptionText = styled.Text`
  font-size: 16px;
  color: #37474f;
`;

export const LogoutButton = styled(OptionItem)`
  background-color: #ffecec;
`;

export const LogoutText = styled(OptionText)`
  color: #e53935;
  font-weight: bold;
`;

export const LogoutIcon = styled(OptionIcon)`
  color: #e53935;
`;
