import Button from 'components/Button';
import CardInfo from 'components/Card-info';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Logo from 'components/Logo';

import * as S from './styles';

export type DataFormation = {
  name: string;
  description: string;
  imageUrl: string;
  duration: string;
  rate: number;
  required: string[];
  teacher: {
    name: string;
    img: string;
  };
  topics: string[];
};

export type CourseTemplateProps = {
  onChangeSearch?: (value: string) => void;
  onClickSearch?: () => void;
  onClickRedirect?: (courseName: string) => void;
  dataFormation?: DataFormation;
};

const CourseTemplate = ({ dataFormation }: CourseTemplateProps) => {
  const handleClick = () => alert('click');

  return (
    <>
      <Header>
        <S.WrapperContent>
          <Logo />
          <div></div>
        </S.WrapperContent>
      </Header>

      <S.PrincipalBanner>
        <S.BoxBanner>
          <S.ContentMessage>
            <S.titleBanner>
              Formação em <S.Contrast>{dataFormation?.name}</S.Contrast>
            </S.titleBanner>
            <S.textBanner>{dataFormation?.description}</S.textBanner>

            <Button onClick={handleClick}>Inscrever-se</Button>
          </S.ContentMessage>

          <S.BoxImg src={dataFormation?.imageUrl} />
        </S.BoxBanner>
      </S.PrincipalBanner>
      <S.SecondSection>
        <S.BoxBanner>
          <CardInfo
            duration={dataFormation?.duration ?? ''}
            nameTeacher={dataFormation?.teacher.name ?? ''}
            rate={dataFormation?.rate ?? 0}
            urlImage={dataFormation?.teacher.img ?? ''}
          />
          <S.SecondContent>
            <h2>Pré-requisitos:</h2>
            <span>*{dataFormation?.required[0]}</span>
            <S.SecondTextBanner darkColor={true}>
              O que você irá aprender:
            </S.SecondTextBanner>
            <S.List>
              {dataFormation?.topics.map((item) => (
                <S.ListItem key={item}>{item}</S.ListItem>
              ))}
            </S.List>
            <Button onClick={handleClick}>Inscrever-se</Button>
          </S.SecondContent>
        </S.BoxBanner>
      </S.SecondSection>
      <Footer />
    </>
  );
};

export default CourseTemplate;
