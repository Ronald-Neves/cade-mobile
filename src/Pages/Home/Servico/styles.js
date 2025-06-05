import { Dimensions } from "react-native";
import styled from "styled-components/native";

const screenWidth = Dimensions.get("window").width;

export const Container = styled.View`
  padding: 20px;
  max-width: 1000px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  margin-bottom: 24px;
  color: #333;
  text-align: center;
`;

export const ServiceGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ServiceCard = styled.View`
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  elevation: 4;
  width: ${(screenWidth - 60) / 2}px;
  margin-bottom: 20px;
`;

export const ServiceImage = styled.Image`
  width: 100%;
  height: 150px;
`;

export const ServiceInfo = styled.View`
  padding: 12px;
`;

export const ServiceName = styled.Text`
  font-size: 18px;
  margin-bottom: 6px;
  color: #222;
  font-weight: bold;
`;

export const ServiceDescription = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

export const ServiceButton = styled.TouchableOpacity`
  background-color: #ff595e;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
`;
