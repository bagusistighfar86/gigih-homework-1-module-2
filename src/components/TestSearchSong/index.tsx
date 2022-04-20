import axios from 'axios';
import React, { useState } from 'react';
import { ItemSong, SearchSongResponse } from '../../apiModel/InterfaceSong';
import { useAppSelector } from '../../redux/hooks';

function TestingSearchTrack() {
  const accessToken = useAppSelector((state) => state.token.accessToken);
  const search = useAppSelector((state) => state.search.search);

  const [data, setData] = useState<ItemSong[]>([]);

  const handleSearch = async () => {
    const response = await axios.get<SearchSongResponse>(`https://api.spotify.com/v1/search?q=${
      search
    }&access_token=${
      accessToken
    }&type=track`);
    setData(response.data.tracks.items);
    return response.data;
  };

  return (
    <div>
      <button type="button" onClick={() => handleSearch()}>Find Your Song</button>
      {data.length > 0 ? <p>{data[0].album.artists[0].name}</p> : ''}
    </div>
  );
}

export default TestingSearchTrack;
