import Card from 'components/Card';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Logo from 'components/Logo';
import SearchInput from 'components/Search-input';

import * as S from './styles';

type CousesData = {
  id: number;
  name: string;
};

export type HomeTemplateProps = {
  onChangeSearch?: (value: string) => void;
  onClickSearch?: () => void;
  onClickRedirect?: (courseName: string) => void;
  courseData: CousesData[];
};

const HomeTemplate = ({
  courseData,
  onChangeSearch,
  onClickRedirect
}: HomeTemplateProps) => {
  const handleChange = (value: string) =>
    onChangeSearch && onChangeSearch(value);
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
        {courseData?.map((course) => (
          <Card
            key={course.id}
            label="Formação em"
            curseName={course.name}
            onClick={onClickRedirect}
          />
        ))}
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
    </>
  );
};

export default HomeTemplate;
