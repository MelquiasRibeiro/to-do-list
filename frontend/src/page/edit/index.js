/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Button } from '../details/styles';
import { Container, Title, Description } from './styles';

export default function Edit({ match }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
  useEffect(() => {
    setTitle(Task.title);
    setDescription(Task.description);
  }, []);

  function handleEdit(e) {
    e.preventDefault();
    const data = {
      title,
      description,
    };

    console.log(data);
  }

  return (
    <Container onSubmit={handleEdit}>
      <Title value={title} onChange={(e) => setTitle(e.target.value)} />
      <Description
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button color="#4AA746" type="submit">
        Salvar
      </Button>
    </Container>
  );
}
