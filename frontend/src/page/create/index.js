/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Button } from '../details/styles';
import { Container, Title, Description } from './styles';
import api from '../../services/api';
import notify from '../../utils/notify';

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
    notify('Tarefa cadastrada com sucesso', 'sucess');
    history.push('/');
  }

  return (
    <Container onSubmit={handleEdit}>
      <Link to="/">
        <FaArrowLeft color="#191920" size={24} />
      </Link>
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
