import { render, screen } from '@testing-library/react';
import Logo from '@/components/Logo/Logo';

test('renders learn react link', () => {
  render(<Logo />);
  const imgElement = screen.getAllByAltText;
  expect(imgElement).toBe(/jobify/i);
});
