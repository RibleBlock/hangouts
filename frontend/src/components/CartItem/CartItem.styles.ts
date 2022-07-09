import styled from 'styled-components';
import { CaretRight } from 'phosphor-react';
import { CartItemStyle } from '.';

export const ArrowCart = styled(CaretRight)<CartItemStyle>`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.COLORS.select_primary};
  transition: transform 200ms;
  transform: rotate(${(props) => (!props.isOpen ? '0' : '90deg')});
  `;

export const Button = styled.button<CartItemStyle>`
  width: 100%;
  height: ${(props) => (!props.isOpen ? '4.5rem' : '10.6rem')};
  min-height: ${(props) => (!props.isOpen ? '4.5rem' : '10.6rem')};
  padding: 1.4rem 1.5rem;
  font-size: 1.5rem;
  background-color: transparent;
  overflow: hidden;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    'title value'
    'flavors flavors';

  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px #BABABA;

  > div {
    display: flex;
    gap: 1rem;
  };

#title {
  grid-area: title;
  margin-bottom: 1rem;
}
#flavors {
  grid-area: flavors;
  text-align: left;
  margin-left: 3rem;
  font-size: 1.4rem;
  letter-spacing: .1rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
}
#value {
  grid-area: value;
}
`;
