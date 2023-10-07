import Logo from 'components/Logo';
import SearchInput from 'components/Search-input';

import * as S from './styles';

const Header = () => {
  const handleChange = (value: string) => console.log('header', value);
  const handleClick = () => alert('click');
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <Logo />
        <SearchInput onChange={handleChange} onSearch={handleClick} />
      </S.WrapperContent>
    </S.Wrapper>
  );
};

export default Header;
