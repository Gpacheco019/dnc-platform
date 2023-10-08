import * as S from './styles';

export type CardInfos = {
  duration: string;
  rate: number;
  nameTeacher: string;
  urlImage: string;
};

const CardInfos = ({ duration, nameTeacher, rate, urlImage }: CardInfos) => {
  return (
    <S.Wrapper>
      <S.ContentInfo>
        <S.ItemInfos>
          <S.TimeIcon />
          <S.Infos>
            <S.Label>Duração</S.Label>
            <S.InfoValue>{duration}h</S.InfoValue>
          </S.Infos>
        </S.ItemInfos>
        <S.ItemInfos>
          <S.LikeIcon />
          <S.Infos>
            <S.Label>Avaliação</S.Label>
            <S.InfoValue>{rate}</S.InfoValue>
          </S.Infos>
        </S.ItemInfos>
      </S.ContentInfo>

      <S.ContentInstructor>
        <S.ContainerImg>
          <S.ImgTeacher src={urlImage} />
        </S.ContainerImg>
        <S.InfoValue>Instrutor(a)</S.InfoValue>
        <S.InfoValue>{nameTeacher}</S.InfoValue>
      </S.ContentInstructor>
    </S.Wrapper>
  );
};

export default CardInfos;
