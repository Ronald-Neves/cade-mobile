import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  flex: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

export const SearchInput = styled.TextInput`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const ResultCard = styled.View`
  background: #fff;
  border-radius: 12px;
  shadow-color: #000;
  shadow-opacity: 0.08;
  shadow-radius: 12px;
  elevation: 3;
  overflow: hidden;
  flex: 1;
  margin-bottom: 12px;
`;

export const ResultImage = styled.Image`
  width: 100%;
  height: 160px;
`;

export const ResultInfo = styled.View`
  padding: 16px;
`;

export const NoResultsText = styled.Text`
  text-align: center;
  margin-top: 20px;
  color: #888;
  font-size: 16px;
`;
