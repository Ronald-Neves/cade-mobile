import styled from "styled-components/native";

export const Container = styled.View`
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

export const QuestionContainer = styled.TouchableOpacity`
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

export const QuestionText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const AnswerText = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 8px;
`;

export const Separator = styled.View`
  height: 12px;
`;
