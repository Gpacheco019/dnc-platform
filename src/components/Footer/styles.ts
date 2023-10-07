import { MdOutlineMailOutline, MdPhone, MdWhereToVote } from 'react-icons/md';

import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.neutral.strong_gray};
  bottom: 0;

  @media (max-width: 672px) {
    height: 21rem;
    padding: 1rem 0;
  }
`;

export const WrapperContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 672px) {
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }
`;

export const WrapperContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutral.white};
  text-align: center;
  gap: 0.8rem;
`;

export const WrapperAddress = styled(WrapperContact)``;

export const Contact = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const Address = styled(Contact)`
  width: 26rem;
`;

export const PhoneIcon = styled(MdPhone).attrs({
  size: 20
})`
  color: ${({ theme }) => theme.colors.neutral.white};
`;

export const EmailIcon = styled(MdOutlineMailOutline).attrs({
  size: 20
})`
  color: ${({ theme }) => theme.colors.neutral.white};
`;

export const AddressIcon = styled(MdWhereToVote).attrs({
  size: 35
})`
  color: ${({ theme }) => theme.colors.neutral.white};
`;
