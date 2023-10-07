import Logo from 'components/Logo';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <Logo />
        <S.WrapperContact>
          Contatos
          <S.Contact>
            <S.EmailIcon />
            suporte@escola.com.br
          </S.Contact>
        </S.WrapperContact>
        <S.WrapperAddress>
          Onde Estamos
          <S.Address>
            <S.AddressIcon />
            Rua Justino Cobra, 61 - Vila Ema,São José dos Campos - SP
          </S.Address>
        </S.WrapperAddress>
      </S.WrapperContent>
    </S.Wrapper>
  );
};

export default Footer;
