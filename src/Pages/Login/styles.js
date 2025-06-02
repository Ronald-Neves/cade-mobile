import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right,rgb(0, 17, 255), #2575fc);
`;

export const Box = styled.div`
  display: flex;
  width: 900px;
  height: 500px;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

export const LeftPanel = styled.div`
  flex: 1;
  background: linear-gradient(to bottom right, #00c6ff, #0072ff);
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 28px;
    font-weight: 700;
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Subtitle = styled.p`
  color: #555;
  margin: 0 0 20px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const LinkRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 10px;
`;

export const Link = styled.a`
  color: #007bff;
  text-decoration: none;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
`;
