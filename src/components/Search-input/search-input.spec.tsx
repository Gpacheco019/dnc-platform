import { fireEvent } from '@testing-library/react';

import { createSetupToTests } from 'utils';

import SearchInput, { SearchInputProps } from './index';

const mockSearchInput = {
  onChange: jest.fn(),
  onSearch: jest.fn()
};

const setup = createSetupToTests<SearchInputProps>(
  { ...mockSearchInput },
  SearchInput
);

describe('<SearchInput />', () => {
  it('Should be render the component', () => {
    const { getByRole, state, getByTestId, container } = setup();
    const input = getByRole('textbox');
    const action = getByTestId('action-search-icon');

    fireEvent.change(input, { target: { value: 'teste' } });

    expect(state.onChange).toHaveBeenCalledWith('teste');

    fireEvent.click(action);
    expect(state.onSearch).toBeCalled();

    expect(container.firstChild).toMatchSnapshot();
  });
});
