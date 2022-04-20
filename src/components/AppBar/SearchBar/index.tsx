// Libraries
import React, { useEffect } from 'react';

import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material';
import { setDataSearch, setSearch } from '../../../redux/slices/searchSlice';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingRight: `${theme.spacing(3)}`,
    transition: theme.transitions.create('width'),
  },
}));

function SearchBar() {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.token.accessToken);
  const search = useAppSelector((state) => state.search.search);

  const getSpotify = () => {
    fetch(
      `https://api.spotify.com/v1/search?q=${
        search
      }&access_token=${
        accessToken
      }&type=track`,
    )
      .then((res) => res.json())
      .then((dataSong) => {
        dispatch(setDataSearch(dataSong.tracks.items));
      });
  };

  // eslint-disable-next-line max-len
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // berhasil
    console.log(event.target.value);
    dispatch(setSearch(event.target.value));
    if (event.target.value === '') {
      dispatch(setDataSearch([]));
    }
  };

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getSpotify();
  };

  useEffect(() => {
    if (search !== '') { getSpotify(); }
  }, [search]);

  return (
    <Box component="form" onSubmit={handleSubmitSearch} sx={{ flexBasis: '50%' }}>
      {/* <form onSubmit={handleSubmit} style={{ width: '100%' }}> */}
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          type="text"
          value={search}
          onChange={handleChangeSearch}
          placeholder="Find Your Song"
          inputProps={{ 'aria-label': 'searchSongBtn' }}
        />
      </Search>
      {/* </form> */}
    </Box>
  );
}

export default SearchBar;
