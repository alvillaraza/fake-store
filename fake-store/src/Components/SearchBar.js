const SearchBar = ({ onSearch, placeholder, query }) => {
  return (
    <div className="Search">
      <span className="SearchSpan">{/* <FaSearch /> */}</span>
      <i class="fas fa-search"></i>
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
