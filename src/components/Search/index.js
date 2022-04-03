

const Search = ({ search, handleSubmit, handleChange }) => {
    return (
        <div className="search-bar">
            <form className='search' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='input'
                    placeholder="Search your music"
                    name="txt"
                    value={search}
                    onChange={handleChange}
                ></input>
            </form>
        </div>
    )
}

export default Search;