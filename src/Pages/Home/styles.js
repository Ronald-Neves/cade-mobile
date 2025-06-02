import styled from "styled-components/native";

export const Container = styled.View`
  padding-bottom: 60px;
  background-color: #f7f7f7;
  flex: 1;
`;

export const Header = styled.View`
  padding: 16px;
  background-color: #fff;
  flex-direction: column;
  elevation: 2; /* sombra no Android */
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

export const Logo = styled.Text`
  color: #ff3d00;
  font-size: 24px;
  font-weight: bold;
`;

export const Location = styled.Text`
  font-size: 14px;
  color: #555;
`;

export const Content = styled.View`
  padding: 16px;
`;

export const Card = styled.View`
  background-color: #fff;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 10px;
  elevation: 1;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.05;
  shadow-radius: 8px;
`;

export const CategoryGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const CategoryItem = styled.TouchableOpacity`
  width: 23%;
  align-items: center;
  margin-bottom: 12px;
`;

export const CategoryImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-bottom: 4px;
  border: 2px solid #eee;
`;

export const CategoryText = styled.Text`
  font-size: 12px;
  color: #555;
`;

export const FooterMenu = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #ddd;
  z-index: 999;
`;

export const Banner = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  margin: 16px 0 8px;
  color: #333;
`;

export const MenuItem = styled.TouchableOpacity`
  align-items: center;
`;

export const MenuText = styled.Text`
  font-size: 12px;
  color: ${(props) => (props.active ? "#ea1d2c" : "#999")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  margin-top: 2px;
`;
