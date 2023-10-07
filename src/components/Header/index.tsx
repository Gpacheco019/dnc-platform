import * as S from './styles';

export type HeaderProps = {
  children: React.ReactElement;
};

const Header = ({ children }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.WrapperContent>{children}</S.WrapperContent>
    </S.Wrapper>
  );
};

export default Header;
