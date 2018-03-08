import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyDlNXT6U3rbExS2kiZj_gBzkyHD8h81d2E';

// Create a new component.  This component should produce some HTML

// JSX cannot be interpretted by the browser
// ALWAYS one component per file!
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards');
  }
  
  // ability to search for new videos, hookup search bar
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // debounce: takes inner function and returns new function that can only be called once every X milli=seconds
    // good way to throttle user input
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)

    // some JSX gets transpiled to vanilla JS
    return (
    <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
        onVideoSelect={selectedVideo =>  this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
// self-closing tab, we need to pass an instance, not a class
ReactDOM.render(<App />, document.querySelector('.container'));