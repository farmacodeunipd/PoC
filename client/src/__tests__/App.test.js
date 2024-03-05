// __tests__/App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeMessage = screen.getByText(/Welcome to React App/i);
  expect(welcomeMessage).toBeInTheDocument();
});

// Aggiungi altri test qui per verificare il comportamento dei componenti, ad esempio:

test('renders header component', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});

test('renders footer component', () => {
  render(<App />);
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
});

// E così via, aggiungi i test necessari per verificare il comportamento dei tuoi componenti React.
