import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const WrapperContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const PrincipalBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.light_blue};
  height: 45.12rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    height: 35.12rem;
  }
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

  @media (max-width: 590px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    margin: 2rem;
  }
`;

export const ContentMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 57rem;
  text-align: center;

  gap: 1rem;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const titleBanner = styled.h1<{ darkColor?: boolean }>`
  color: ${({ theme, darkColor }) =>
    !darkColor ? theme.colors.neutral.white : theme.colors.neutral.strong_gray};
  font-weight: 400;
  display: flex;
  gap: 0.8rem;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    text-align: center;
    justify-content: center;
    gap: 0.1rem;
    margin: 1rem;
  }
`;

export const textBanner = styled.p<{ darkColor?: boolean }>`
  color: ${({ theme, darkColor }) =>
    !darkColor ? theme.colors.neutral.white : theme.colors.neutral.strong_gray};
  font-weight: 300;
  font-size: small;
  width: 41rem;

  @media (max-width: 700px) {
    width: 100%;
  }
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
  width: 40rem;

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
  margin: 2.4rem 0;

  @media (max-width: 590px) {
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`;

export const Contrast = styled.p`
  color: ${({ theme }) => theme.colors.neutral.strong_gray};
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  list-style: inherit;
  color: ${({ theme }) => theme.colors.neutral.gray};
  text-align: left;
  font-weight: 300;
`;

export const SecondTextBanner = styled(titleBanner)`
  display: flex;
  flex-wrap: nowrap;
  text-align: left;

  @media (max-width: 700px) {
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
  }
`;

export const SecondContent = styled(ContentMessage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  text-align: center;
  margin: 3rem;
  padding: 1.5rem;
  gap: 1.5rem;
  width: fit-content;

  @media (max-width: 700px) {
    align-items: center;
    text-align: center;
    justify-content: center;
    margin: 0;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;

  @media (max-width: 650px) {
    margin: 1rem;
  }
`;

export const WrapperContentFormation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

export const PrincipalZoneContent = styled.div`
  min-height: fit-content;
  @media (max-width: 650px) {
    height: 340px;
    margin: 1rem;
  }
`;

export const VideoContent = styled.iframe`
  border: none;
  border-radius: 0.5rem;

  @media (max-width: 650px) {
    width: 450px;
    height: 240px;
  }

  @media (max-width: 650px) {
    width: 320px;
    height: 240px;
  }
`;

export const DocContent = styled.div`
  width: 700px;
  height: 300px;
  font-weight: 300;

  @media (max-width: 650px) {
    width: fit-content;
    margin: 1rem;
  }
`;

export const QuizContent = styled.div`
  height: 300px;
`;

export const QuizItem = styled.p`
  font-weight: 300;
  text-align: center;
`;
