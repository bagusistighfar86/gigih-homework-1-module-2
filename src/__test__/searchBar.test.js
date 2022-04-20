/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import UserEvent from '@testing-library/user-event';
import SearchBar from '../components/AppBar/SearchBar/index';
import store from '../redux/store';

const renderWithUtils = (children) => render(<Provider store={store}>{children}</Provider>);

test('Renders with search input component', async () => {
  renderWithUtils(<SearchBar />);

  const inputElement = screen.getByPlaceholderText('Search Song...');

  expect(inputElement).toBeInTheDocument();
});

test('value change input search component', () => {
  renderWithUtils(<SearchBar />);

  const inputElement = screen.getByPlaceholderText('Search Song...');

  UserEvent.type(inputElement, 'tulus');

  expect(screen.getByDisplayValue('tulus')).toBeInTheDocument();
});

test('renders search button component', async () => {
  renderWithUtils(<SearchBar />);

  const buttonElement = screen.getByRole('button', {
    name: /searchSongBtn/i,
  });

  expect(buttonElement).toBeInTheDocument();
});
