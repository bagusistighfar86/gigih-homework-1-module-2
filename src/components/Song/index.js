// Libraries
import React from 'react';

// CSS
import './song.css';

// Components
import formatFromMinutesSecond from '../../utils/formatFromMinutesSecond';

function Song({
  uri, data, selectedSong, setSelected, index,
}) {
  const generateButtonText = () => {
    const selected = selectedSong.findIndex((item) => item.uri === uri);
    if (selected !== -1) return 'Deselect';
    return 'Select';
  };

  const handleSelect = () => {
    const selected = selectedSong.findIndex((item) => item.uri === uri);
    if (selectedSong === 0) {
      setSelected([]);
    }
    if (selected > -1) {
      const newSelectedSongs = selectedSong.filter((item) => item.uri !== uri);
      setSelected(newSelectedSongs);
    } else {
      const newSelectedSongs = [...selectedSong, data];
      setSelected(newSelectedSongs);
    }
  };

  return (
    <tr className="song">
      <th className="align-middle" scope="row">{index + 1}</th>
      <td className="song-img"><img className="img-song bg-primary" src={data.album.images[2].url} alt="Song Cover" /></td>
      <td className="align-middle song-detail">
        <p className="song-name m-0">{data.name}</p>
        <p className="song-artist m-0">{data.album.artists[0].name}</p>
      </td>
      <td className="align-middle song-album">{data.album.name}</td>
      <td className="align-middle">{formatFromMinutesSecond(data.duration_ms)}</td>
      <td className="position-relative">
        <button className="align-text-middle text-white btn btn-select-song position-absolute" type="button" onClick={handleSelect}>
          {generateButtonText()}
        </button>
      </td>
    </tr>
  );
}

export default Song;
