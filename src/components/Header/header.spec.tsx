import { createSetupToTests } from 'utils';

import Header, { HeaderProps } from './index';

const setup = createSetupToTests<HeaderProps>(
  {
    children: (
      <>
        <p>text element</p>
      </>
    )
  },
  Header
);

describe('<Header />', () => {
  it('should be render the component', () => {
    const { getByText, container } = setup();

    expect(getByText('text element'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
