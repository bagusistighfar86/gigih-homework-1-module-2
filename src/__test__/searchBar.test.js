/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/AppBar/SearchBar';
import { store } from '../redux/store';

test('Renders with search input component', async () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>,
  );

  const inputElement = screen.getByPlaceholderText('Find Your Song');

  expect(inputElement).toBeInTheDocument();
});

test('value change input search component', () => {
  render(
    <Provider store={store}>
      <SearchBar />
    </Provider>,
  );

  const inputElement = screen.getByPlaceholderText('Find Your Song');

  userEvent.type(inputElement, 'Raisa');

  expect(screen.getByDisplayValue('Raisa')).toBeInTheDocument();
});
