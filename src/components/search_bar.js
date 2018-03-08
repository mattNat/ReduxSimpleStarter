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
      <div className='search-bar'>
        <input 
          // turn into a controlled component
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
    /*
    1. set the state with the term
    2. call the callback from index
    */
    onInputChange(term) {
     this.setState({term});
     this.props.onSearchTermChange(term);
   }

    // let onInputChange = term => {
    //   this.setState({term});
    //   this.props.onSearchTermChange(term);
    // }

  

  // declare event handler
  // name of element (Input), name of event (Change)
  // event object to get more info 

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;