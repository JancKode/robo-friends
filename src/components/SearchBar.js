import React from "react";

const SearchBar = (props) => {
    const {searchChange} = props;
    console.log('Searchbar')
  return (
      <div className='pa2'> 
          <input 
          className = 'pa3 ba b--green bg-lightest-blue' 
          type="search" 
          placeholder="seach robots" 
          onChange= {searchChange}/>
      </div>
  )
};

export default SearchBar;
