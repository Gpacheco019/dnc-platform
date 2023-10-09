import { fireEvent } from '@testing-library/react';

import { createSetupToTests } from 'utils';

import HomeTemplate, { HomeTemplateProps } from './index';

const mockCourseData: HomeTemplateProps = {
  courseData: [
    { id: 1, name: 'Curso 1' },
    { id: 2, name: 'Curso 2' },
    { id: 3, name: 'Curso 3' }
  ],
  onChangeSearch: jest.fn(),
  onClickSearch: jest.fn(),
  onClickRedirect: jest.fn()
};

const setup = createSetupToTests<HomeTemplateProps>(
  { ...mockCourseData },
  HomeTemplate
);

describe('<HomeTemplate />', () => {
  it('should be render component', () => {
    const { getByText, getAllByRole } = setup();

    expect(getByText('Curso 1'));
    expect(getByText('Curso 2'));
    expect(getByText('Curso 3'));

    expect(getAllByRole('button')).toHaveLength(3);
  });

  it('should be call function if click', () => {
    const { getAllByRole, state } = setup();
    const curso1 = getAllByRole('button')[0];

    fireEvent.click(curso1);

    expect(state.onClickRedirect).toHaveBeenCalledWith('Curso 1');
  });

  it('should be call onChange', () => {
    const { getByRole, state } = setup();
    const inputPesquisa = getByRole('textbox');

    fireEvent.change(inputPesquisa, { target: { value: 'Pesquisa de teste' } });

    expect(state.onChangeSearch).toHaveBeenCalledWith('Pesquisa de teste');
  });
});
