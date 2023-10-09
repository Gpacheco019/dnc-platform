import { ChangeEvent, useCallback } from 'react';

import * as S from './styles';

export type SearchInputProps = {
  onChange: (value: string) => void;
  onSearch?: () => void;
};

const SearchInput = ({ onChange, onSearch }: SearchInputProps) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <S.WrapperInput>
      <S.ActionIcon onClick={onSearch}>
        <S.SearchIcon />
      </S.ActionIcon>
      <S.SearchInput
        maxLength={15}
        type="text"
        name="search"
        onChange={handleChange}
        placeholder="Encontre seu curso..."
      />
    </S.WrapperInput>
  );
};

export default SearchInput;
