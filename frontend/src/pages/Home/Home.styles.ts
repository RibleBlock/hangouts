import styled from 'styled-components';

export const Banner = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url('https://www.oguiademilao.com/wp-content/uploads/2020/09/Pizzaria-Cocciuto-em-Milao.jpg');
  width: 100%;
  height: calc(100vh - 7rem);

  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 50%;
    max-width: 45rem;
  }
`;
