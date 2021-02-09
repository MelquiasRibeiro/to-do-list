/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Container, ButtonsContainer, Button } from './styles';
import api from '../../services/api';
import notify from '../../utils/notify';

export default function Details({ match }) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();

  const history = useHistory();

  const TaskId = Number(match.params.id);

  useEffect(() => {
    api.get(`/tasks/${TaskId}`).then((response) => {
      setTitle(response.data.task.title);
      setDescription(response.data.task.description);
      setStatus(response.data.task.finished);
    });
  }, []);

  function handleCheck() {
    const data = { finished: true };
    api.put(`/tasks/${TaskId}`, data);
    setStatus(true);
    notify('Tarefa marcadada como concluída', 'sucess');
  }
  function handleUnCheck() {
    const data = { finished: false };
    api.put(`/tasks/${TaskId}`, data);
    setStatus(false);
    notify('Tarefa marcadada como Em andamento ', 'sucess');
  }

  function handleDelete() {
    api.delete(`/tasks/${TaskId}`);
    history.push('/');
  }

  return (
    <Container>
      <Link to="/">
        <FaArrowLeft color="#191920" size={24} />
      </Link>
      <strong>{title}</strong>
      <p>{description}</p>
      <ButtonsContainer>
        <Link to={`/edit/${TaskId}`}>
          <Button color="#FFC23D">Editar</Button>
        </Link>
        <Button color="#DC3B45" onClick={() => handleDelete()}>
          Excluir
        </Button>
        {status ? (
          <Button
            color="#0D78F9"
            onClick={() => {
              handleUnCheck();
            }}
          >
            Reabrir
          </Button>
        ) : (
          <Button
            color="#4AA746"
            onClick={() => {
              handleCheck();
            }}
          >
            Finalizar
          </Button>
        )}
      </ButtonsContainer>
    </Container>
  );
}
