/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ButtonsContainer, Button } from './styles';

export default function Details({ match }) {
  const TaskId = Number(match.params.id);

  const tasks = [
    {
      id: 1,
      title: 'Estudar CSS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elitCommodi perferendis autem incidunt similique itaque ex architecto rem repellendus nemo. Explicabo veritatis,eum sunt veniam deseruntdolore praesentium iusto doloribus suscipit?',
      finished: true,
    },
    {
      id: 2,
      title: 'Estudar CSS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elitCommodi perferendis autem incidunt similique itaque ex architecto rem repellendus nemo. Explicabo veritatis,eum sunt veniam deseruntdolore praesentium iusto doloribus suscipit?',
      finished: true,
    },
    {
      id: 3,
      title: 'Estudar CSS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elitCommodi perferendis autem incidunt similique itaque ex architecto rem repellendus nemo. Explicabo veritatis,eum sunt veniam deseruntdolore praesentium iusto doloribus suscipit?',
      finished: true,
    },
  ];

  const Task = tasks.find((t) => t.id === TaskId);
  return (
    <Container>
      <strong>{Task.title}</strong>
      <p>{Task.description}</p>
      <ButtonsContainer>
        <Link to={`/editar/${TaskId}`}>
          <Button color="#FFC23D">Editar</Button>
        </Link>
        <Button color="#DC3B45">Excluir</Button>
        <Button color="#4AA746">Finalizar</Button>
      </ButtonsContainer>
    </Container>
  );
}
