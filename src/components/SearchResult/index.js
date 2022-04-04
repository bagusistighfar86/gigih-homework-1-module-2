import Song from "../Song/index";

const SearchResult = ({ selectedSong, setSelected, dataSearch }) => {
    return (
        <div className="CreatePlaylist hoem-section">
            <h1 className="text-white">Search Result</h1>
            {dataSearch.map((item) => (
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

export default SearchResult;
