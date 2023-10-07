import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const WrapperContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const PrincipalBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.blue};
  height: 45.12rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxBanner = styled.div`
  width: 1500px;
  padding: 0 15rem;
  display: flex;
  justify-content: space-between;
  gap: 2.4rem;

  @media (max-width: 1500px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 700px) {
    padding: 0 2rem;
  }
`;

export const ContentMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 57rem;
  text-align: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const titleBanner = styled.h1`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: 400;
`;

export const textBanner = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: 300;
  font-size: small;
`;

export const ContentArt = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50rem;
  height: 50rem;
  padding: 3rem;
`;

export const BoxImg = styled.img`
  display: flex;
  width: 50rem;

  @media (max-width: 1000px) {
    display: none;
  }
`;
