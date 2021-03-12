const SearchBar = ({ onSearch, placeholder, query }) => {
  return (
    <div className="search-bar">
      <span className="search-span">
        <i class="fas fa-search"></i>
      </span>
      <input
        className="search-input"
        type="text"
        value={query}
        onChange={onSearch}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
