import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.8rem 0;
  gap: 2.4rem;
  background-color: ${({ theme }) => theme.colors.neutral.light_gray};

  @media (max-width: 1100px) {
    display: flex;
    justify-content: center;

    gap: 1.4rem;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(4, 18rem);

    gap: 1.2rem;
  }

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(4, 17rem);
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: repeat(3, 15rem);
  }

  @media (max-width: 672px) {
    display: grid;
    grid-template-columns: repeat(2, 16rem);
    padding: 1.8rem 1.5rem;
  }
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

export const titleBanner = styled.h1<{ darkColor?: boolean }>`
  color: ${({ theme, darkColor }) =>
    !darkColor ? theme.colors.neutral.white : theme.colors.neutral.strong_gray};
  font-weight: 400;
`;

export const textBanner = styled.p<{ darkColor?: boolean }>`
  color: ${({ theme, darkColor }) =>
    !darkColor ? theme.colors.neutral.white : theme.colors.neutral.strong_gray};
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

export const SecondSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 2.4rem;
  background-color: ${({ theme }) => theme.colors.neutral.light_gray};
`;
