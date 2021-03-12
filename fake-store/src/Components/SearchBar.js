const SearchBar = ({ onSearch, placeholder, query }) => {
  return (
    <div className="Search">
      <span className="SearchSpan">{/* <FaSearch /> */}</span>
      <input
        className="SearchInput"
        type="text"
        value={query}
        onChange={onSearch}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
