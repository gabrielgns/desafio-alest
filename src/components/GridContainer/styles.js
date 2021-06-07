import styled from 'styled-components';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 24px;
  height: 24px;
`;

export const EditIcon = styled(AiOutlineEdit)`
  width: 24px;
  height: 24px;
`;
export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f37e3;
  color: #fff;
  border-radius: 0px 0px 10px 0px;
  border: none;
  height: 100%;
  width: 100%;
`;

export const SeparateLine = styled.div`
  width: 4px;
  background: #000;
  height: 100%;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f37e3;
  color: #fff;
  border-radius: 0px 0px 0px 10px;
  border: none;
  height: 100%;
  width: 100%;
`;

export const GridBox = styled.div`
  height: 250px;
  width: 250px;
  border: 0.5px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const GridInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
`;

export const Value = styled.p`
  color: #2b9c03;
`;

export const Image = styled.img`
  height: 40%;
  border-radius: 50%;
`;

export const CarName = styled.p`
  font-size: 18.5px;
`;
