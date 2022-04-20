/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from '../redux/store';
import responseSongSearch from '../MockAPI/responseSongSearch';
import Layout from '../components/LayoutComponent/layout';
import Home from '../pages/home';

const server = setupServer(
  rest.get('https://api.spotify.com/v1/search', (req, res, ctx) => res(ctx.json(responseSongSearch))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Test Search Song', async () => {
  render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Layout>
            <Route path="/home">
              <Home />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </Provider>,
  );

  const inputElement = screen.getByPlaceholderText('Find Your Song');

  userEvent.type(inputElement, 'Raisa');

  await screen.findAllByText('Tulus');
});
