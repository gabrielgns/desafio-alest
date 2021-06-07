import React from 'react';
import { Grid } from '@material-ui/core';
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

const GridContainer = ({ name, price }) => {
  return (
    <Grid item xs={12} sm={3} wrap='nowrap'>
      <GridBox>
        <GridInfo>
          <CarName>{name}</CarName>
          <Image src={Car} />
          <Value>{`R$${price},00`}</Value>
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
    </Grid>
  );
};

export default GridContainer;
