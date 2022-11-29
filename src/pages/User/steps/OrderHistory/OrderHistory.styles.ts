import styled from 'styled-components';
import { Box } from '../../../../components/adm/AdmWishes/AdmWishes.styles';
import { Section } from '../BeginUser/BeginUser.styles';

export const SectionWish = styled(Section)`
  padding: 2rem 3rem;
  max-width: 67rem;


  > #title {
    grid-area: title;
    > div {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;

      > h2 {
        display: inline-block;
        font-size: 2rem;
      }
      > svg {
        margin: auto 0;
      }
    }
    > p {
      max-width: none;
    }
  }
`;

export const ButtonTrash = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  &:not(:hover) {
    background-color: transparent;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

export const InnerBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: .15rem solid #747474;
  margin-top: 2.5rem;
  > .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  p {
    width: 100%;
    padding: .9rem;
    text-align: left;
    max-width: none !important;
    &.righttext {
      text-align: right;
    }
  }
`;
