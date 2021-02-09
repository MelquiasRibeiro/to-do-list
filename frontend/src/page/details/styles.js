import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 32px;
  margin: 32px;
  height: 400px;
  > strong {
    margin: 8px 0;
  }
  > p {
    margin: 16px 0 32px 8px;
  }
  > a {
    align-self: flex-start;
    margin-left: 16px;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  align-self: center;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  transition: opacity 0.2s;
  margin: 0 56px;
  height: 36px;
  width: 100px;
  border: none;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${(props) => props.color};
  &:hover {
    opacity: 0.7;
  }
`;
