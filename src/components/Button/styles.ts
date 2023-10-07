import styled from 'styled-components';

export type WrapperProps = {
  variantColor: 'primary' | 'secondary';
};

export const Wrapper = styled.button<WrapperProps>`
  background-color: ${({ variantColor, theme }) =>
    variantColor === 'primary'
      ? theme.colors.primary.blue
      : theme.colors.secondary.light_blue};
  height: 3rem;
  width: 10rem;
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.neutral.white};

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 672px) {
    width: 9rem;
  }
`;
