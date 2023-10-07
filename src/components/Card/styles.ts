import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 21rem;
  height: 15.4rem;
  background-color: ${({ theme }) => theme.colors.secondary.light_blue};
  border-radius: 1.9rem;
  padding: 1rem;
  transition: transform 1s;

  @media (max-width: 1100px) {
    width: 15rem;
    height: 11.4rem;
  }
`;

export const TextLabel = styled.h1`
  color: ${({ theme }) => theme.colors.neutral.strong_gray};
  width: 600;
  font-size: 24px;

  @media (max-width: 1100px) {
    font-size: 16px;
  }
`;

export const TextCurse = styled.h1`
  color: ${({ theme }) => theme.colors.neutral.white};
  width: 600;
  font-size: 36px;

  @media (max-width: 1100px) {
    font-size: 24px;
  }
`;
