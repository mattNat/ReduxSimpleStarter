import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDlNXT6U3rbExS2kiZj_gBzkyHD8h81d2E';

// Create a new component.  This component should produce some HTML

// JSX cannot be interpretted by the browser
// ALWAYS one component per file!
const App = () => {
  // some JSX gets transpiled to vanilla JS
  return (
  <div>
    <SearchBar />
  </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
// self-closing tab, we need to pass an instance, not a class
ReactDOM.render(<App />, document.querySelector('.container'));