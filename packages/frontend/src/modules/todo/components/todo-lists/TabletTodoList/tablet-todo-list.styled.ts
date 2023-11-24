import styled from 'styled-components';

export const SwiperWrapper = styled('div')<{ $loading: boolean }>`
  display: ${({ $loading }) => ($loading ? 'flex' : 'block')};
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 410px;
  height: 220px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .swiper {
    overflow: visible;
    left: 0;
  }
`;
