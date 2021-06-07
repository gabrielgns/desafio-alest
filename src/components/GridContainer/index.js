import React from 'react';
// import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import Car from '../../assets/car.jpg';
import {
  DeleteButton,
  EditButton,
  GridBox,
  GridInfo,
  ButtonsWrapper,
  Value,
  Image,
  DeleteIcon,
  EditIcon,
  SeparateLine,
  CarName
} from './styles';

const GridContainer = () => {
  return (
    <GridBox>
      <GridInfo>
        <CarName>Nome</CarName>
        <Image src={Car} />
        <Value>R$10000,00</Value>
        <ButtonsWrapper>
          <EditButton>
            <EditIcon />
          </EditButton>
          <SeparateLine />
          <DeleteButton>
            <DeleteIcon />
          </DeleteButton>
        </ButtonsWrapper>
      </GridInfo>
    </GridBox>
  );
};

export default GridContainer;
