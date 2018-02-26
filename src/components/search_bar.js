import React, { Component } from 'react';
// const Component = React.Component

// // functional component
// const SearchBar = () => {
//   // generate HTML user input for typing into
//   return <input />;
// };

// def a new class and give it access to all functionality that React.Component has
class SearchBar extends Component {
  // all JS classes have constructor
  // set up
  constructor(props) {
    // call on parent method with super
    super(props);
    // initialize with new object with properties we want to record on state
    this.state = { term: '' };
  }

  render() {
    // pass event handler to element
    // all HTML input elements emit change event
    // JSX and JS variables -> wrap it with curly braces
    return (
      // always manipulate state like this
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        {/* Value of the input: {this.state.term} */}
      </div>
    );
  }

  // declare event handler
  // name of element (Input), name of event (Change)
  // event object to get more info 

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;