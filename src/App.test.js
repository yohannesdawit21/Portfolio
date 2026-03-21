import { render, screen } from '@testing-library/react';

import App from './App';

test('renders portfolio hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /yohannes dawit/i
  });
  expect(heading).toBeInTheDocument();
});
