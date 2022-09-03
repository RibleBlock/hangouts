import { Camera } from 'phosphor-react';
import styled from 'styled-components';

export const CameraIcon = styled(Camera)`
  color: #444;
`;

export const Label = styled.label`
  cursor: pointer;
  width: 15rem;
  height: 15rem;
  margin: 1.3rem auto;
  border-radius: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  > ${CameraIcon} {
    width: 7rem;
    height: 7rem;
  }
  > input {
    display: none;
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;
`;

export const InputEdit = styled.input`
  width: 20rem;
  padding: .8rem;
  font-size: 1.4rem;
  border-radius: .6rem;
  box-shadow: 0px 0px 8px #00000039;
`;

export const GridBox = styled.div`
  width: 100%;
  margin: 3rem 0;
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  row-gap: 2.5rem;

  > div p {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1.3rem;
  }
`;

export const Form = styled.form`
background-color: #fff;
width: 50rem;
max-height: 90%;
padding: 2rem 2.5rem;
border-radius: .7rem;
font-size: 1.7rem;
`;
