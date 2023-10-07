import * as S from './styles';

export type CardProps = {
  label: string;
  curseName: string;
};

const Card = ({ label, curseName }: CardProps) => {
  return (
    <S.Wrapper>
      <S.TextLabel>{label}</S.TextLabel>
      <S.TextCurse>{curseName}</S.TextCurse>
    </S.Wrapper>
  );
};

export default Card;
