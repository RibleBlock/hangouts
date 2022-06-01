import styled from 'styled-components';

import bannerBg from '../../assets/images/banner_bg.png';

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.COLORS.primary};
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-image: url(${bannerBg});
  width: 100%;
  height: calc(100vh - 7rem);

  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 50%;
    max-width: 45rem;
    min-width: 24rem;
  }
`;
