import React from 'react';
import { connect } from "react-redux";
import { updateQuery } from "../actions/actions";
// import Fuse from "fuse.js";

const SearchBar = (props) => {
  // Start of Search Functionality
  // Start of Search Functionality

  //const [query, updateQuery] = useState("")
  // Allows users to search by title, description, and category
  // const fuse = new Fuse(props.products, {
  //   keys: ["title", "description", "category"],
  //   includeScore: true,
  // });

  // Updates the search bar
  function onSearch(e) {
    props.updateQuery(e.target.value);
  }

  // console.log('currentquery', props.currentQuery);
  // const query = props.currentQuery;
  // const result = fuse.search("women")
  // console.log('result', result);

  // displays the results - if there is a query in search, display what was searched : otherwise display all products
  // const productResults = query
  //   ? result.map((productResult) => productResult.item)
  //   : productsList;
  // End of Search Functionality
  // End of Search Functionality

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
  return { currentQuery: state.currentQuery};
};

export default connect(mapStateToProps, { updateQuery })(SearchBar);
