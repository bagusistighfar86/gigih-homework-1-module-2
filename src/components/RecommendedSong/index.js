import song_dummy from "../../song_dummy"
import Song from "../Song/index";

const RecommendedSong = ({ selectedSong, setSelected }) => {
    return (
        <div className="CreatePlaylist home-section">
            <h1 className="text-white">Recommended Songs</h1>
            {song_dummy.map((item) => (
                <Song
                    key={item.id}
                    uri={item.uri}
                    data={item}
                    selectedSong={selectedSong}
                    setSelected={setSelected}
                />
            ))}
        </div>
    )
}

export default RecommendedSong;