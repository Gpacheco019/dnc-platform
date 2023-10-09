import { useState } from 'react';

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
  content: {
    video: string;
    doc: string;
    quiz: string[];
  };
};

export type CourseTemplateProps = {
  onRegister?: () => void;
  dataFormation?: DataFormation;
  register: boolean;
};

const buttonActions = [
  { name: 'video aula' },
  { name: 'doc' },
  { name: 'quiz' }
];

const CourseTemplate = ({
  dataFormation,
  register,
  onRegister
}: CourseTemplateProps) => {
  const [buttonActive, setButtonActive] = useState('');

  const handleClick = () => onRegister && onRegister();
  const handleClickButton = (value: string) => () => setButtonActive(value);

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
            {!register && <Button onClick={handleClick}>Inscrever-se</Button>}
            {register && <Button>Matriculado</Button>}
          </S.ContentMessage>

          <S.BoxImg src={dataFormation?.imageUrl} />
        </S.BoxBanner>
      </S.PrincipalBanner>
      <S.SecondSection>
        {!register && (
          <S.BoxBanner>
            <>
              <CardInfo
                duration={dataFormation?.duration ?? ''}
                nameTeacher={dataFormation?.teacher.name ?? ''}
                rate={dataFormation?.rate ?? 0}
                urlImage={dataFormation?.teacher.img ?? ''}
              />
              <S.SecondContent>
                <h2>Pré-requisitos:</h2>
                <span>{dataFormation?.required[0]}</span>
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
            </>
          </S.BoxBanner>
        )}
        {register && (
          <S.WrapperContentFormation>
            <S.ActionButtons>
              {buttonActions.map((btn) => (
                <Button key={btn.name} onClick={handleClickButton(btn.name)}>
                  {btn.name}
                </Button>
              ))}
            </S.ActionButtons>
            <S.PrincipalZoneContent>
              {buttonActive === '' && (
                <>
                  <S.Contrast>
                    Bora começar ? clique nos botões acima para iniciar seus
                    estudos!
                  </S.Contrast>
                  <S.BoxImg src="/img/start.png" />
                </>
              )}
              {buttonActive === 'video aula' && (
                <S.VideoContent
                  width="600"
                  height="415"
                  src={dataFormation?.content.video}
                  allowFullScreen={true}
                />
              )}

              {buttonActive === 'doc' && (
                <S.DocContent>{dataFormation?.content.doc}</S.DocContent>
              )}

              {buttonActive === 'quiz' && (
                <S.QuizContent>
                  {dataFormation?.content.quiz.map((item) => (
                    <S.QuizItem key={item}>{item}</S.QuizItem>
                  ))}
                </S.QuizContent>
              )}
            </S.PrincipalZoneContent>
          </S.WrapperContentFormation>
        )}
      </S.SecondSection>
      <Footer />
    </>
  );
};

export default CourseTemplate;
