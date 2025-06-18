import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  background-color: #e6f2f8;
  flex: 1;
`;

export const Banner = styled.View`
  margin-bottom: 24px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 16px;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 14px;
  text-align: center;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Card = styled.View`
  background-color: #ffffffdd;
  border-radius: 14px;
  width: 48%;
  overflow: hidden;
  elevation: 4;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-offset: 0px 2px;
  shadow-radius: 6px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100px;
`;

export const CardTitle = styled.Text`
  padding: 10px;
  font-size: 17px;
  color: #34495e;
  font-weight: bold;
  text-align: center;
`;

export const ExploreButton = styled.TouchableOpacity`
  background-color: #4db6ac;
  padding: 14px;
  border-radius: 12px;
  align-items: center;
  margin-top: 30px;
`;

export const ExploreButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
`;
