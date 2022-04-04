const Search = ({ search, handleSubmit, handleChangeSearch }) => {
    return (
        <div className="search-bar">
            <form className='search' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='input'
                    placeholder="Search your music"
                    name="txt"
                    value={search}
                    onChange={handleChangeSearch}
                ></input>
            </form>
        </div>
    )
}

export default Search;