import * as S from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variantColor?: 'primary' | 'secondary';
};

const Button = ({
  children,
  onClick,
  variantColor = 'primary'
}: ButtonProps) => {
  return (
    <S.Wrapper onClick={onClick} variantColor={variantColor}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
