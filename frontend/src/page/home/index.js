import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {
  Container,
  FilterContainer,
  Filter,
  ListContainer,
  ListItem,
} from './styles';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks').then((response) => {
      setTasks(response.data.tasks);
    });
  }, []);

  return (
    <Container>
      <FilterContainer>
        <Filter sucess={false}>Em adamento</Filter>
        <Filter sucess>Finalizado</Filter>
      </FilterContainer>
      <ListContainer>
        {tasks.map((task) => (
          <ListItem to={`/details/${task.id}`}>
            <strong>{task.title}</strong>
            <p>
              <strong>{task.description}</strong>
            </p>
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
}
