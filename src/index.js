import React from 'react';
import ReactDOM from 'react-dom'; //npm package
import SearchBar from './components/search_bar'; //file ref (path)

const API_KEY = 'AIzaSyBp_N0URp4aPgUETqmpgE7_nR8WJFZv51U';

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
// query container
// self closing tag for empty JSX tags <App />
// root component
