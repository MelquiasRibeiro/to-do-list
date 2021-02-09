import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, FloatButton, ListContainer, ListItem } from './styles';

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks').then((response) => {
      setTasks(response.data.tasks);
    });
  }, []);

  return (
    <Container>
      <ListContainer>
        {tasks.map((task) => (
          <ListItem to={`/details/${task.id}`} finished={task.finished}>
            <strong>{task.title}</strong>
            <p>
              <strong>{task.description}</strong>
            </p>
          </ListItem>
        ))}
        <FloatButton to="/create">Criar</FloatButton>
      </ListContainer>
    </Container>
  );
}
