import { render, screen } from '@testing-library/react';

import App from './App';

test('renders portfolio hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /yohannes dawit/i
  });
  expect(heading).toBeInTheDocument();
});

test('shows skills navigation item', () => {
  render(<App />);
  const skillsLink = screen.getByRole('link', { name: /skills/i });
  expect(skillsLink).toBeInTheDocument();
});

test('renders contact form fields', () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
});
