/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Button } from '../details/styles';
import { Container, Title, Description } from './styles';
import api from '../../services/api';
import notify from '../../utils/notify';

export default function Edit({ match }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const history = useHistory();

  const TaskId = Number(match.params.id);

  useEffect(() => {
    api.get(`/tasks/${TaskId}`).then((response) => {
      setTitle(response.data.task.title);
      setDescription(response.data.task.description);
    });
  }, []);

  function handleEdit(e) {
    e.preventDefault();
    const data = {
      title,
      description,
    };
    api.put(`/tasks/${TaskId}`, data);
    notify('tarefa editada com sucess', 'sucess');
    history.push('/');
  }

  return (
    <Container onSubmit={handleEdit}>
      <Link to="/">
        <FaArrowLeft color="#191920" size={24} />
      </Link>
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
