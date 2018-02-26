import React, { Component } from 'react';
// const Component = React.Component

// // functional component
// const SearchBar = () => {
//   // generate HTML user input for typing into
//   return <input />;
// };

// def a new class and give it access to all functionality that React.Component has
class SearchBar extends Component {
  render() {
    // pass event handler to element
    // all HTML input elements emit change event
    // JSX and JS variables -> wrap it with curly braces
    return <input onChange={event => console.log(event.target.value)} />;
  }

  // declare event handler
  // name of element (Input), name of event (Change)
  // event object to get more info 
  
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;