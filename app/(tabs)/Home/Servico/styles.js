import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const screenWidth = Dimensions.get("window").width;

export const Container = styled(LinearGradient).attrs({
  colors: ["#f2fcfe", "#e0f7fa"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  padding: 20px;
  max-width: 1000px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  margin-bottom: 24px;
  color: #263238;
  text-align: center;
  font-weight: bold;
`;

export const InputBusca = styled.TextInput`
  background-color: #ffffffcc;
  border: 1px solid #bbb;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 16px;
  margin-bottom: 24px;
  color: #333;
`;

export const ServiceGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ServiceCard = styled.View`
  background-color: #ffffffee;
  border-radius: 14px;
  overflow: hidden;
  elevation: 5;
  width: ${(screenWidth - 60) / 2}px;
  margin-bottom: 20px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
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
  color: #00796b;
  font-weight: bold;
`;

export const ServiceDescription = styled.Text`
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
`;

export const ServiceButton = styled.TouchableOpacity`
  background-color: #4db6ac;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
`;

export const ServiceButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
