import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Banner = styled.View`
  margin-bottom: 20px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 12px;
`;

export const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Card = styled.View`
  background-color: #fff;
  border-radius: 12px;
  width: 48%;
  overflow: hidden;
  elevation: 3;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100px;
`;

export const CardTitle = styled.Text`
  padding: 8px;
  font-size: 16px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;

export const ExploreButton = styled.TouchableOpacity`
  background-color: #ff595e;
  padding: 14px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const ExploreButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
