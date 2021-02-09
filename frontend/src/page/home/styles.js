import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px;
`;
export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Filter = styled.button`
  width: 150px;
  height: 50px;
  padding: 16px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  margin: 32px 56px;
  border-radius: 12px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  transition: opacity 0.2s;
  background-color: ${(props) => (props.sucess ? '#4AA746' : '#FFC23D')};
  &:hover {
    opacity: 0.7;
  }
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ListItem = styled(Link)`
  background-color: #ffffff;
  border-radius: 12px;
  margin: 8px;
  padding: 16px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }

  > strong {
    margin: 8px 0;
  }
  > p {
    margin: 16px 0 0 8px;
  }
`;
