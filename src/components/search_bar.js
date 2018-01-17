import React, { Component } from 'react'; 

// class based component -- use class for dynamic components 
// class based has state object
// super calls parent class 
// declare term on state (this.state.term)
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ' ' };
	}

  render() {
    return (
     <div>
    	<input 
    		value={this.state.term}
    		onChange = {event => this.setState({ term: event.target.value })} /> 
     </div> 
    );
  }
}
// onChange == props
// every class must have a render function and return JSX
// onChange is react defined prop 

export default SearchBar


// functional component vs class component

// import React from 'react';

// const SearchBar = () => {
//   return <input />;
// };
//
// export default SearchBar;
