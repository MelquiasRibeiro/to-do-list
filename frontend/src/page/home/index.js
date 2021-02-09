import React from 'react';
import {
  Container,
  FilterContainer,
  Filter,
  ListContainer,
  ListItem,
} from './styles';

export default function Home() {
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
