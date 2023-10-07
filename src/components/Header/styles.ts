import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.neutral.strong_gray};
  position: fixed;
`;

export const WrapperContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
