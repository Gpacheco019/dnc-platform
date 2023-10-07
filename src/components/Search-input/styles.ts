import { MdSearch } from 'react-icons/md';

import styled from 'styled-components';

export const WrapperInput = styled.div`
  width: 24.75rem;
  height: 2.85rem;
  background-color: ${({ theme }) => theme.colors.neutral.white};
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
`;

export const SearchIcon = styled(MdSearch).attrs({
  size: '20'
})``;

export const ActionIcon = styled.span.attrs({
  'data-testid': 'action-search-icon'
})`
  height: 100%;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral.light_gray};
  }
`;

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  border: none;
  font-weight: 300;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.neutral.gray_300};
`;
