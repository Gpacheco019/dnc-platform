import Logo from 'components/Logo';
import SearchInput from 'components/Search-input';

import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <Logo />
        <SearchInput />
      </S.WrapperContent>
    </S.Wrapper>
  );
};

export default Header;
