import { FaSpinner } from 'react-icons/fa';

import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpinnerSolid = styled.div.attrs({
  'data-testid': 'spinner-solid'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;

  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  animation: spin infinite 1.5s linear;

  background: conic-gradient(
    from 90deg at 50% 50%,
    rgba(255, 255, 255, 0.00001) 0deg,
    ${({ theme }) => theme.colors.secondary.light_blue} 360deg
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 1rem),
    ${({ theme }) => theme.colors.neutral.white} 0
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 1rem),
    ${({ theme }) => theme.colors.neutral.white} 0
  );

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerDotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 6.4rem;
  z-index: 1;

  > svg {
    animation: spin infinite 1.5s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerDots = styled(FaSpinner).attrs({
  'data-testid': 'spinner-dots'
})`
  color: ${({ theme }) => theme.colors.secondary.light_blue};
  width: 100%;
  height: 100%;
`;
