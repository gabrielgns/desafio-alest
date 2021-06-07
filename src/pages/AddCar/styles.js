import { Button } from 'reactstrap';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

export const StyledButton = styled(Button)`
  margin: 1rem;
  border-radius: 1rem;
  border: none;
  height: 30px;
  width: 100px;
  background-color: orange;
`;

export const FormButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
