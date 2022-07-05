import styled from 'styled-components';
import { UserCircle, SignOut } from 'phosphor-react';

export const UserCircleIcon = styled(UserCircle)`
  width: 6rem;
  height: 6rem;
`;
export const SignOutIcon = styled(SignOut)`
  min-width: 2.5rem;
  min-height: 2.5rem;
`;

export const Div = styled.div`
  width: 100%;
  max-width: 40em;
  margin-bottom: 2.5rem;
  display: flex;
  gap: 1rem;
  > p {
    font-size: 1.7rem;
  }
`;

export const Section = styled.div`
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.30);
  position: relative;
  width: 100%;
  max-width: 40em;
  padding: 2rem;
  border-radius: .5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    > p {
      max-width: 16rem;
      margin-left: .5rem;
    }
  }

  > button {
    display: flex;
    align-items: center;
    gap: 1rem;

    cursor: pointer;
    font-size: 1.6rem;
    text-align: right;
    text-decoration: underline;
    background-color: transparent;

    &:hover {
      font-weight: bold;
    }
  }
`;
