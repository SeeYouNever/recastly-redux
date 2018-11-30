import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';
// var SearchContainer = () => {};

// const mapStateToProps = (state) => {
//     return {
//         items: state.items
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleSearchChange: query
//     }
// };

// var SearchContainer = connect => (
//     mapStateToProps,
//     mapDispatchToProps,
// );

var mapDispatchToProps = (dispatch) => {
    return{
    handleSearchInputChange: q => dispatch(handleVideoSearch(q))
    }
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
var SearchContainer = connect(null,mapDispatchToProps)(Search);
// export default SearchContainer;
export default SearchContainer;
