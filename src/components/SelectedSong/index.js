import Song from "../Song/index";

const SelectedSong = ({ selectedSong, setSelected }) => {
    return (
        <div className="SelectedSong home-section">
            <h1 className="text-white">Selected Songs to Playlist</h1>
            {selectedSong.map((item) => (
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

export default SelectedSong;

