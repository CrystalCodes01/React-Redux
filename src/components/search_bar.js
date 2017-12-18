import React, { Component } from 'react'; //syntax sugar

// every class must have a render function
class SearchBar extends Component {
  render() {
    return <input onChange = {event => console.log(event.target.value)} />; //onChange == prop
  }
}
// ^^ onChange is react defined prop


export default SearchBar;



// functional component vs class component
// import React from 'react';
// const SearchBar = () => {
//   return <input />;
// };
//
// export default SearchBar;
