import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('renders logo', () => {
  render(<Logo />);

  const logoImage = screen.getByRole('img');

  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute('alt', 'Jobify');
});
