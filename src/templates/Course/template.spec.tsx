import { fireEvent } from '@testing-library/react';

import { createSetupToTests } from 'utils';

import CourseTemplate, { CourseTemplateProps } from './index';

const mockDataFormation = {
  dataFormation: {
    name: 'Formação de Teste',
    description: 'Descrição de teste',
    imageUrl: 'imagem-de-teste.jpg',
    duration: '10 horas',
    rate: 4.5,
    required: ['Requisito de Teste'],
    teacher: {
      name: 'Professor Testador',
      img: 'imagem-do-professor.jpg'
    },
    topics: ['Tópico 1', 'Tópico 2'],
    content: {
      video: 'video-de-teste.mp4',
      doc: 'Documento de teste',
      quiz: ['Pergunta 1', 'Pergunta 2']
    }
  },
  register: false,
  onRegister: jest.fn()
};

const setup = createSetupToTests<CourseTemplateProps>(
  { ...mockDataFormation },
  CourseTemplate
);

describe('<CourseTemplate />', () => {
  it('should be render component', () => {
    const { getByText, getAllByText } = setup();

    expect(getByText('Formação de Teste'));
    expect(getByText('Descrição de teste'));
    expect(getAllByText('Inscrever-se')).toHaveLength(2);
    expect(getByText('Requisito de Teste'));
    expect(getByText('Tópico 1'));
    expect(getByText('Tópico 2'));
    expect(getByText('Professor Testador'));
  });

  it('should be to show some elements about course if register is true', () => {
    const { getByText, getAllByRole } = setup({ register: true });

    expect(getAllByRole('button', { name: 'video aula' }));
    expect(getAllByRole('button', { name: 'doc' }));
    expect(getAllByRole('button', { name: 'quiz' }));
    expect(getAllByRole('button', { name: 'Matriculado' }));

    expect(
      getByText(
        'Bora começar ? clique nos botões acima para iniciar seus estudos!'
      )
    );
  });

  it('should be show button "Inscrever-se" and act click', () => {
    const { getAllByRole, state } = setup();

    const button = getAllByRole('button', { name: 'Inscrever-se' });

    fireEvent.click(button[0]);

    expect(state.onRegister).toHaveBeenCalled();
  });

  it('should be to show content section about course', () => {
    const { getByText, getByRole } = setup({ register: true });

    expect(getByRole('button', { name: 'video aula' }));
    expect(getByRole('button', { name: 'doc' }));
    expect(getByRole('button', { name: 'quiz' }));
    expect(getByRole('button', { name: 'Matriculado' }));

    fireEvent.click(getByRole('button', { name: 'quiz' }));

    expect(getByText('Pergunta 1'));

    fireEvent.click(getByRole('button', { name: 'doc' }));

    expect(getByText('Documento de teste'));
  });
});
