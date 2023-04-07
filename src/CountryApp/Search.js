import React from 'react'

const Search = (props) => {

   const handleSearch = (e) =>{
      props.onSearchCountryfun(e.target.value)
   }
  return (
    <>
    <input type="text" onChange={handleSearch} />
    </>
  )
}

export default Search