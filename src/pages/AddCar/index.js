import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import api from '../../services/api';
import { Container, Title, StyledButton, FormButton } from './styles';

const AddCar = () => {
  const history = useHistory();

  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const handleRegister = async () => {
    if (!nome || !preco) {
      toast.error('Informe todos os seus dados');
    } else {
      try {
        api
          .post('/api/car', {
            nome,
            preco
          })
          .then(() => {
            // eslint-disable-next-line no-restricted-globals
            history.push('/');
          });
      } catch (error) {
        toast.error(
          'Houve um problema com o cadastro. Tente novamente mais tarde'
        );
      }
    }
  };
  return (
    <main>
      <Container>
        <Form>
          <Title>Adicionar Carro</Title>
          <FormGroup>
            <Label>Nome:</Label>
            <Input
              type='text'
              id='inputName'
              value={nome}
              onChange={(nameValue) => {
                setNome(nameValue.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label>Preço: </Label>
            <Input
              type='text'
              id='inputPreco'
              value={preco}
              onChange={(valueValue) => {
                setPreco(valueValue.target.value);
              }}
            />
          </FormGroup>
          <FormButton>
            <StyledButton onClick={handleRegister}>Cadastrar</StyledButton>
          </FormButton>
        </Form>
      </Container>
    </main>
  );
};

export default AddCar;
