import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 20px;
  text-align: center;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 6px;
  color: #333;
`;

export const Input = styled.TextInput`
  height: 50px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const AvatarOptions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const AvatarButton = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 10px;
`;

export const AvatarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const SaveButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
`;

export const SaveButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
