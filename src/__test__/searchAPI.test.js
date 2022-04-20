/* eslint-disable no-undef */
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestSearchSong from '../components/TestSearchSong';
import responseSongSearch from '../apiModel/responseSongSearch';
import { useAppSelector } from '../redux/hooks';

const accessToken = useAppSelector((state) => state.token.accessToken);
const search = useAppSelector((state) => state.search.search);

const server = setupServer(
  rest.get(`https://api.spotify.com/v1/search?q=${
    search
  }&access_token=${
    accessToken
  }&type=track`, (req, res, ctx) => res(ctx.json(responseSongSearch))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Test Search Song', async () => {
  render(<TestSearchSong />);

  userEvent.click(screen.getByText('Find Your Song'));

  await screen.findByText('Tulus');
});
