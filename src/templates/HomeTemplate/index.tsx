import Link from 'next/link';

import Header from 'components/Header';
import Logo from 'components/Logo';
import { Main } from 'components/Main/';
import SearchInput from 'components/Search-input';

import * as S from './styles';

const HomeTemplate = () => {
  const handleChange = (value: string) => console.log('header', value);
  const handleClick = () => alert('click');

  return (
    <>
      <Header>
        <S.WrapperContent>
          <Logo />
          <SearchInput onChange={handleChange} onSearch={handleClick} />
        </S.WrapperContent>
      </Header>

      <Main>
        <S.Container>
          <Link href="/about">Link: About</Link>
        </S.Container>
      </Main>
    </>
  );
};

export default HomeTemplate;
