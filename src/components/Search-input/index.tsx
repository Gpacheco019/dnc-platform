import * as S from './styles';

const SearchInput = () => {
  return (
    <S.WrapperInput>
      <S.ActionIcon>
        <S.SearchIcon />
      </S.ActionIcon>
      <S.SearchInput maxLength={15} />
    </S.WrapperInput>
  );
};

export default SearchInput;
