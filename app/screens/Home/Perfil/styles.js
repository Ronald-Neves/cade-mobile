import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const Avatar = styled(Image)`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  color: #555;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const OptionList = styled.View`
  border-top-width: 1px;
  border-top-color: #eee;
`;

export const OptionItem = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding-vertical: 12px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

export const OptionIcon = styled.View`
  margin-right: 15px;
`;

export const OptionText = styled.Text`
  font-size: 16px;
  color: #333;
`;

export const LogoutButton = styled(OptionItem)`
  margin-top: 30px;
  background-color: #ffecec;
`;

export const LogoutText = styled(OptionText)`
  color: #d9534f;
  font-weight: bold;
`;

export const LogoutIcon = styled(OptionIcon)`
  color: #d9534f;
`;
