import {
  FormControl, RadioGroup,
} from '@mui/material';
import styled from 'styled-components';

export const FormController = styled(FormControl)`
  * {
    font-size: 1.4rem;
  }
`;

export const RadioLabel = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #000;
`;

export const RadioBox = styled(RadioGroup)`
  span {
    font-size: 1.4rem !important;
  }
  font-weight: bold;
  color: #000;
`;
