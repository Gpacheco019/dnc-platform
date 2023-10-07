import * as S from './styles';

export type LogoProps = {
  urlImage?: string;
};

const url =
  'https://www.escoladnc.com.br/wp-content/webp-express/webp-images/uploads/2022/10/logo_dnc_transp4.png.webp';

const Logo = ({ urlImage = url }: LogoProps) => {
  return (
    <S.WrapperLogo>
      <S.Logo src={urlImage} alt="Logo DNC" />
    </S.WrapperLogo>
  );
};

export default Logo;
