// /Pages/stylesCadastro.js
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right,rgb(0, 17, 255), #00bfff);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  background: white;
  width: 900px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0,0,0,0.2);
`;

export const LeftPanel = styled.div`
  flex: 1;
  background: #00bfff;
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RightPanel = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  color: #555;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Link = styled.a`
  color: #007bff;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkRow = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;
