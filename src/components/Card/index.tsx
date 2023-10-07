import Button from 'components/Button';

import * as S from './styles';

export type CardProps = {
  label: string;
  curseName: string;
  onClick?: () => void;
};

const Card = ({ label, curseName, onClick }: CardProps) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <S.Wrapper>
      <S.TextLabel>{label}</S.TextLabel>
      <S.TextCurse>{curseName}</S.TextCurse>
      <S.WrapperAction>
        <Button onClick={handleClick}>Saiba mais</Button>
      </S.WrapperAction>
    </S.Wrapper>
  );
};

export default Card;
