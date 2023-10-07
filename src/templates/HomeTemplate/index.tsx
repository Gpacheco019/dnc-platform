import Card from 'components/Card';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Logo from 'components/Logo';
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

      <S.PrincipalBanner>
        <S.BoxBanner>
          <S.ContentMessage>
            <S.titleBanner>Ta afim de alavancar sua carreira ?</S.titleBanner>
            <S.textBanner>
              Aqui na DNC somos experts nisso, a nossa grade cursos te
              proporciona um conhecimento de ponta a ponta.
            </S.textBanner>
          </S.ContentMessage>

          <S.BoxImg src="/img/goals-rafiki.png" />
        </S.BoxBanner>
      </S.PrincipalBanner>
      <S.ContainerCards>
        <Card label="Formação em" curseName="Dados" />
        <Card label="Formação em" curseName="Dados" />
        <Card label="Formação em" curseName="Dados" />
        <Card label="Formação em" curseName="Dados" />
      </S.ContainerCards>
      <S.SecondSection>
        <S.BoxBanner>
          <S.BoxImg src="/img/Classroom-rafiki.png" />
          <S.ContentMessage>
            <S.titleBanner darkColor={true}>
              Venha estudar com a DNC
            </S.titleBanner>
            <S.textBanner darkColor={true}>
              Você aprenderá com profissionais ja estabelecidos no mercado, além
              de absorver conceitos importantes, saberá quando e onde aplicar de
              forma eficiente. Chega de fazer cursos sem profundidade, vem para
              DNC.
            </S.textBanner>
          </S.ContentMessage>
        </S.BoxBanner>
      </S.SecondSection>
      <Footer />

      {/* <Main>
        <S.Container>
          <Link href="/about">Link: About</Link>
        </S.Container>
      </Main> */}
    </>
  );
};

export default HomeTemplate;
