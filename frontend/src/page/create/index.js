/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../details/styles';
import { Container, Title, Description } from './styles';
import api from '../../services/api';

export default function Create({ match }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const history = useHistory();

  const TaskId = Number(match.params.id);

  function handleEdit(e) {
    e.preventDefault();
    const data = {
      title,
      description,
    };
    api.post(`/tasks/${TaskId}`, data);

    history.push('/');
  }

  return (
    <Container onSubmit={handleEdit}>
      <Title
        required
        placeholder="Escolha uma título para sua Tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Description
        required
        placeholder="Escolha uma descrição para sua Tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button color="#4AA746" type="submit">
        Salvar
      </Button>
    </Container>
  );
}
