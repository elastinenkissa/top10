import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NavbarPure from './NavbarPure';

describe('on the navbar,', () => {
  test('active link changes color', () => {
    render(<NavbarPure pathname='/'/>);

    const user = userEvent.setup();

    const link = screen.getByText('Movies');
    expect(link).toHaveStyle('color: white');

    user.click(link);
    expect(link).toHaveStyle('color: #f08080');
  });
});
