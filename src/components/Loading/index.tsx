import React from 'react';

import * as S from './styles';

export type SpinnerProps = {
  variant?: 'solid' | 'dots';
};

export const Spinner = ({ variant = 'solid' }: SpinnerProps) => (
  <S.Wrapper>
    {variant === 'dots' ? (
      <S.SpinnerDotsWrapper>
        <S.SpinnerDots />
      </S.SpinnerDotsWrapper>
    ) : (
      <S.SpinnerSolid />
    )}
  </S.Wrapper>
);
