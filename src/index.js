import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import SearchBar from './components/search_bar'; //file ref (path)
import VideoList from './components/video_list'; //file ref (path)
import VideoDetail from './components/video_detail'; //file ref (path)
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBp_N0URp4aPgUETqmpgE7_nR8WJFZv51U';

// base component 
// function === =>
class App extends Component { 
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'run the jewels'}, (videos) => {
			this.setState({ videos }); // key and value same name 
		});
	}

render() {
  return (
  <div>
    <SearchBar />
    <VideoDetail videos={this.state.videos[0]} />
    <VideoList videos={this.state.videos} /> 
  </div>
  );
 }
}

ReactDOM.render(<App />, document.querySelector('.container'));
// passing props videos={this.state.videos}
// root component is index.js
// app is an instance of app which is a class 
// query the container and render it to container 
// all children render to the root
// self closing tag for empty JSX tags <App />
