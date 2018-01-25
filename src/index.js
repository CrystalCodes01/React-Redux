import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import SearchBar from './components/search_bar'; //file ref (path)
import VideoList from './components/video_list'; //file ref (path)
import VideoDetail from './components/video_detail'; //file ref (path)
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBp_N0URp4aPgUETqmpgE7_nR8WJFZv51U';


class App extends Component { 
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		 };
		 this.videoSearch('nf');

	}

	videoSearch(term) {
			YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
			videos: videos,
			selectedVideo: videos[0]
			}); 
		});
	}

render() {
  return (
  <div>
    <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
    <VideoDetail video={this.state.selectedVideo} />
    <VideoList 
    	onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
    	videos={this.state.videos} /> 
  </div>
  );
 }
}

ReactDOM.render(<App />, document.querySelector('.container'));
// base component 
// function === =>
// !! passing props videos={this.state.videos} !! //
// root component is index.js
// app is an instance of app which is a class 
// query the container and render it to container 
// all children render to the root
// self closing tag for empty JSX tags <App />
// key and value same name in some cases ({videos: videos})