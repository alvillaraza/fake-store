import React from 'react';
import { connect } from "react-redux";
import { updateQuery } from "../actions/actions";
import Fuse from "fuse.js";

const SearchBar = (props) => {

  // Updates the search bar
  function onSearch(e) {
    props.updateQuery(e.target.value);
  }
  

  return (
    <div className="search-bar">
      <span className="search-span">
        <i className="fas fa-search"></i>
      </span>
      <input
        className="search-input"
        type="text"
        value={props.currentQuery}
        onChange={onSearch}
        placeholder="Search"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products,
    currentQuery: state.currentQuery
  };
};

export default connect(mapStateToProps, { updateQuery })(SearchBar);
