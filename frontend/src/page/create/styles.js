import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 32px;
  margin: 32px;
  height: 400px;
  align-items: flex-end;
`;

export const Title = styled.input`
  height: 50px;
  padding: 8px;
  border: solid 1px #000;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 32px;
  align-self: center;
  min-width: 450;
`;

export const Description = styled.textarea`
  padding: 16px;
  border: solid 1px #000;
  border-radius: 12px;
  font-size: 16px;
  min-height: 170px;
  min-width: 850px;
  max-width: 850px;
  flex: 1;
  margin-bottom: 32px;
`;
