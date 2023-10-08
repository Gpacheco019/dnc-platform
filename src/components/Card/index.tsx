import Button from 'components/Button';

import * as S from './styles';

export type CardProps = {
  label: string;
  curseName: string;
  onClick?: (curseName: string) => void;
};

const Card = ({ label, curseName, onClick }: CardProps) => {
  const handleClick = () => {
    onClick && onClick(curseName);
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
