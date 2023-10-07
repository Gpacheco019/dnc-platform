import Link from 'next/link';

import Header from 'components/Header';
import { Main } from 'components/Main/';

import * as S from './styles';

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <Main>
        <S.Container>
          <Link href="/about">Link: About</Link>
        </S.Container>
      </Main>
    </>
  );
};

export default HomeTemplate;
