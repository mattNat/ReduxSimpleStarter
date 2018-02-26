import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component.  This component should produce some HTML

// JSX cannot be interpretted by the browser
// ALWAYS one component per file!
const App = () => {
  // some JSX gets transpiled to vanilla JS
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
// self-closing tab, we need to pass an instance, not a class
ReactDOM.render(<App />, document.querySelector('.container'));