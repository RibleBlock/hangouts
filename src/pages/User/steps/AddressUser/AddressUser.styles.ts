import { Dialog } from '@headlessui/react';
import styled from 'styled-components';
import { Div, Section, BoxPopOver } from '../MyData/MyData.styles';

export const addressDiv = styled(Div)``;

export const addressSection = styled(Section)`
  width: 100%;
  max-width: 66rem;
  padding: 0;

  > button {
    padding: 3.3rem 4rem;
    display: flex;
    gap: 1rem;
    h3 {
      font-size: 1.6rem;
    }
  }
`;

export const BoxPopOverAddress = styled(BoxPopOver)`
  padding: 0;
`;

export const DialogTitle = styled(Dialog.Title)`
  padding: .8rem;
  text-align: center;
  font-size: 1.8rem;
  border-bottom: 1px solid #000;
`;

export const AddressField = styled.div`
  > p {
    font-size: 1.6rem;
  }
  input {
    width: 100%;
    height: 4rem;
    font-size: 1.6rem;
    padding: 1rem;
    margin-top: .5rem;
    border-radius: 1rem;
    border: .3rem solid #A67E3D;
    outline: none;
  }
`;
export const FormAddress = styled.form`
  margin: 1rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  grid-template-areas: 
    "cep bairro"
    "rua rua"
    "numero complemento"
    "buttonSave buttonCancel";

  > button {
    width: 11rem;
    height: 4.5rem;
    &:first-of-type {grid-area: buttonSave;}
    &:last-child {grid-area: buttonCancel;}
  }
  > ${AddressField}#cep {
    grid-area: cep;
  }
  > ${AddressField}#bairro {
    grid-area: bairro;
  }
  > ${AddressField}#rua {
    grid-area: rua;
  }
  > ${AddressField}#numero {
    grid-area: numero;
  }
  > ${AddressField}#complemento {
    grid-area: complemento;
  }
`;
