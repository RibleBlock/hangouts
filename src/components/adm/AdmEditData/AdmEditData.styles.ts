import { Camera } from 'phosphor-react';
import styled, { css } from 'styled-components';

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

export const Box = styled.div`
background-color: #fff;
width: 50rem;
max-height: 90%;
padding: 2rem 2.5rem;
border-radius: .7rem;
font-size: 1.7rem;
`;
