import Song from "../Song/index";

const RecommendedSong = ({ selectedSong, setSelected, dataSearch }) => {
    return (
        <>
            {dataSearch.length > 0 &&
                <>
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
                </>
            }
        </>
    )
}

export default RecommendedSong;
