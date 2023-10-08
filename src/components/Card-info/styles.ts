import {
  MdAccessTime,
  MdOutlineThumbUp,
  MdReportGmailerrorred
} from 'react-icons/md';

import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.blue};
  max-height: fit-content;
  width: 30.6rem;
  border-radius: 1.5rem;
  padding: 2rem;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;
`;

export const ContentInstructor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ItemInfos = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.8rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: 300;
  font-size: 20px;
`;

export const InfoValue = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: 600;
  font-size: 16px;
  text-align: left;
`;

export const Infos = styled.div``;

export const TimeIcon = styled(MdAccessTime).attrs({
  size: 27
})`
  color: ${({ theme }) => theme.colors.neutral.white};
`;

export const LikeIcon = styled(MdOutlineThumbUp).attrs({
  size: 27
})`
  color: ${({ theme }) => theme.colors.neutral.white};
`;

export const RequiredIcon = styled(MdReportGmailerrorred).attrs({
  size: 27
})`
  color: ${({ theme }) => theme.colors.neutral.white};
`;

export const ContainerImg = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
`;

export const ImgTeacher = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
